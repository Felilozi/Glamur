import React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Carrito = ({label}) =>{

    return (
        <div style={estiloCarritoDiv}>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={label} color="error">
                    <ShoppingCartIcon />
                </Badge>
                </IconButton>

        </div>
    )
}
export default Carrito
const estiloCarritoDiv ={
    display : 'flex',
    flexDirection :'row',
    alignItems : 'center',
}
// const estiloCarrito ={

// }