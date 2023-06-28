// import React from "react";
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// const Carrito = ({label}) =>{

//     return (
//         <div style={estiloCarritoDiv}>
//                 <IconButton
//                 size="large"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//                 >
//                 <Badge badgeContent={label} color="error">
//                     <ShoppingCartIcon />
//                 </Badge>
//                 </IconButton>

//         </div>
//     )
// }
// export default Carrito
// const estiloCarritoDiv ={
//     display : 'flex',
//     flexDirection :'row',
//     alignItems : 'center',
// }
// // const estiloCarrito ={

// // }



import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from "@mui/material";
    const CartCompra = ()=>  {
    const [counter, setCounter] = React.useState("0");

    const handleClik = () =>{
        
        setCounter(parseInt(counter  + 1 ))
        

    }
    return (
            <IconButton onClick={handleClik} >
                <ThemeProvider theme={theme}>
                    
                <Badge  badgeContent={counter} color="azul" >
                    <ShoppingCartIcon htmlColor="#fff"/>
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