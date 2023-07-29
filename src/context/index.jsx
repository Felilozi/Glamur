import { getFirestore, addDoc, collection, updateDoc, doc, writeBatch, getDoc } from 'firebase/firestore';
import React from 'react'
import Swal from 'sweetalert2';

export const AppContext = React.createContext();
const { Provider } = AppContext;

const ContexProvider = ({ children }) => {
    const [carrito, setCarrito] = React.useState([]);
    const [orderId, setOrderId] = React.useState('');

    const addProductToCarrito = (product) => {
        const productoEncontradoIndex = carrito.findIndex((producto) => producto.id === product.id);

        productoEncontradoIndex >= 0
            ? ( 
                setCarrito((prevCarrito) =>
                    prevCarrito.map((item, index) =>
                        index === productoEncontradoIndex
                            ? {
                                ...item,
                                quantity: item.quantity + product.quantity,
                                price: item.price + product.price,
                            }
                            : item
                    )
                )
            )
            : 
            setCarrito([...carrito, product]);
    };
    const deletCarrito = (index) => {
    
        setCarrito(carrito.filter((item, i) => i !== index));
        

    };
    const createNewOrder = (order) => {
        const db = getFirestore();
        const orders = collection(db, 'orders');
        const batch = writeBatch(db);
        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id)
                setCarrito([])
                Swal.fire(
                    'Good job!',
                    `Su orden #${snapshot.id} fue procesada correcatamente `,
                    'success'
                )
                const getDocOrder = doc(db, 'orders', snapshot.id);
                updateDoc(getDocOrder, { orederID: snapshot.id });
                try {
                    const stockUpdate = order.items.map(async (item) => {
                        const productId = item.id;
                        const productRef = doc(db, 'productos', productId);
                        const stockDelta = item.quantity;

                        const snapshot = await getDoc(productRef);
                        if (snapshot.exists()) {
                            const currentStock = snapshot.data().stock;
                            const newStock = currentStock - stockDelta;
                            batch.update(productRef, { stock: newStock });
                        }
                    });
                    Promise.all(stockUpdate)
                        .then(() => {
                            return batch.commit();
                        })
                        .then(() => {
                            console.log("esta funcionando")
                        })
                        .catch((error) => {
                            console.error('Error updating stocks:', error);
                        });

                } catch (error) {
                    console.error('Error updating stocks:', error);
                }
            })
            .catch((err) => {
                console.log(err);
            })


    };

    return (
        <Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length, createNewOrder, lastOrder: orderId, deletCarrito }}>
            {children}
        </Provider>
    )

}
export default ContexProvider;