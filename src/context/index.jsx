import { getFirestore, addDoc ,collection, updateDoc,doc} from 'firebase/firestore';
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
        const orders = collection(db,'orders');
        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id)
                setCarrito([])

                Swal.fire(
                    'Good job!',
                    `Su orden #${snapshot.id} fue procesada correcatamente `,
                    'success'
                )
                const getDoc = doc(db,'orders', snapshot.id);
                updateDoc(getDoc,{orederID:snapshot.id})
            })
            .catch((err) => {
                console.log(err);
            })

    };

    return (
        <Provider value={{ carrito, addProductToCarrito, quantityCart: carrito.length, createNewOrder, lastOrder: orderId, deletCarrito}}>
            {children}
        </Provider>
    )

}
export default ContexProvider;