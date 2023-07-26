import React from "react";
import { AppContext } from "../context";
import { Box, Typography } from "@mui/material";
import CartCarrriro from "../cart-carrito/index.jsx";
import { Link } from 'react-router-dom';

import UserInfo from "../user-info";


const Cart = () => {
    const { carrito, createNewOrder, lastOrder } = React.useContext(AppContext);
    const [render, setRender] = React.useState();
    const handleRender = () => {
        setRender(prevrender => prevrender ++ ) 
    };



    return (
        <div>
            {
            !carrito.length ?
            <>
            <p>No hay elemento del carrito </p>
            <Link to="/">Ir a comprar</Link>
            </>
            :
            <>            
                <Box >
                    {carrito.map((data,index) =>
                    < CartCarrriro index={index} data={data} handleRender={handleRender} />)  }
                </Box>
                <Box>
                    < UserInfo carrito={carrito} createNewOrder={createNewOrder} lastOrder={lastOrder} />
                </Box>
            </>

            }
        </div>
)

    }
            export default Cart;