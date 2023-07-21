import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";


const CartCompra = ({cartQuantity}) => {
    return (
        <ThemeProvider theme={theme}>
            <Link to="/cart">
                <Badge badgeContent={cartQuantity} color="azul" >
                    <ShoppingCartIcon htmlColor="#fff" />
                </Badge>
            </Link>
        </ThemeProvider>
    )
}
export default CartCompra
const theme = createTheme({
    palette: {
        azul: {
            main: '#4dd0e1',

        },
    },
});