import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";



const CartCompra = ({cartQuantity}) => {
    const navegacion = useNavigate()
    const navegacionCompra =() =>{
        navegacion('/cart');
    }
    return (
        <IconButton onClick={navegacionCompra}>
        <ThemeProvider theme={theme}>            
                <Badge badgeContent={cartQuantity} color="azul" >
                    <ShoppingCartIcon htmlColor="#fff" />
                </Badge>
        </ThemeProvider>
        </IconButton>
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