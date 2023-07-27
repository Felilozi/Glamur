import React from "react";
import { Box } from "@mui/material";
import CartCarrriro from "../cart-carrito/index.jsx";
import { Link } from 'react-router-dom';
import { AppContext } from "../../context";
import UserInfo from "../user-info/index.jsx";


const Cart = () => {
    const { carrito, createNewOrder, lastOrder } = React.useContext(AppContext);
    const [rendeR, setRender] = React.useState();
    const handleRender = () => {
        setRender(rendeR => rendeR ++ ) 
    };




    return (
        <div>
            {
            !carrito.length ?
            <>            
            <Link to="/">Ir a comprar</Link>
            <p>No hay elemento del carrito </p>
            </>
            :
            <>            
                <Box >
                    {carrito.map((data,index) =>
                    < CartCarrriro key={data.id} index={index} data={data} handleRender={handleRender} />)  }
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