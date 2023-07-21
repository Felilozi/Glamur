import React from 'react'

export const AppContext = React.createContext();
const {Provider} = AppContext;

const ContexProvider =({children})=>{
        const [carrito,setCarrito] = React.useState([]);
        const addProductToCarrito = (product)=>{
            setCarrito([...carrito,product]);
        };

    return(
        <Provider value={{carrito,addProductToCarrito,quantityCart:carrito.length}}>
            {children}
        </Provider>
    )
        
}
export default ContexProvider;