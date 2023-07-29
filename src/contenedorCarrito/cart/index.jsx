import React from "react";
import { Box, Button } from "@mui/material";
import CartCarrriro from "../cart-carrito/index.jsx";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context";
import UserInfo from "../user-info/index.jsx";


const Cart = () => {
    const { carrito, createNewOrder, lastOrder } = React.useContext(AppContext);
    const [rendeR, setRender] = React.useState();
    const handleRender = () => {
        setRender(rendeR => rendeR++)

    };
    const navegacion = useNavigate()
    const navegacionCompra = () => {
        navegacion('/productos/all');
    }




    return (
        <div>
            {
                !carrito.length ?
                    < Box sx={{ textAlign: "center" }}>

                        <Button onClick={navegacionCompra} sx={{
                            backgroundColor: '#f8b7bd',
                            color: "black",
                            margin: "10px 10px"
                        }} variant="contained" color="primary" >
                            Ir a comprar
                        </Button>
                        <p>No hay elemento del carrito </p>
                    </Box>
                    :
                    <>
                        <Box >
                            {carrito.map((data, index) =>
                                < CartCarrriro key={data.id} index={index} data={data} handleRender={handleRender} rendeR={rendeR} />)}
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