import { getFirestore, addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import React from 'react'
import Swal from 'sweetalert2';

export const AppContext = React.createContext();
const { Provider } = AppContext;

const ContexProvider = ({ children }) => {
    const [carrito, setCarrito] = React.useState([]);
    const [orderId, setOrderId] = React.useState('');

    const addProductToCarrito = (product) => {
        setCarrito([...carrito, product]);
    };
    const deletCarrito = (index) => {
        console.log(carrito.length);
        setCarrito(carrito.filter((item, i) => i !== index));
        console.log(carrito.length);

    };
    const createNewOrder = (order) => {
        const db = getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id)
                setCarrito([])
                Swal.fire(
                    'Good job!',
                    `Su orden #${snapshot.id} fue procesada correcatamente `,
                    'success'
                )
                const getDoc = doc(db, 'orders', snapshot.id);
                updateDoc(getDoc, { orederID: snapshot.id });
                try {
                    const stockUpdate = order.items.map(async (item) => {
                        const productId = item.id;
                        const productRef = doc(db, 'productos', productId);
                        const stockDelta = item.cantidad;

                        const snapshot = await getDoc(productRef);
                        if (snapshot.exists()) {
                            const currentStock = snapshot.data().sold_quantity;
                            const newStock = currentStock - stockDelta;
                            batch.update(productRef, { sold_quantity: newStock });
                        }
                    })
                    Promise.all(stockUpdate)
                    .then(() => {
                    return batch.commit();
                })
                    .then(()=>{
                        console.log("esta funcionando")
                    })
                    .catch((error) => {
                        console.error('Error updating stocks:', error);
                    });
                    
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