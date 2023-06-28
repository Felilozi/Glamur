// import React from "react";


// const Navbar =()=>{
//     return (
//         <div>

//         <nav >
//             <ul style={ulnavbar}>
//                 <li ><a href="#"style={linavbar }>Inicio</a></li>
//                 <li ><a href="#" style={linavbar}>Contacto</a></li>
//                 <li ><a href="#" style={linavbar} >Productos</a></li>
//             </ul>
//         </nav>  
//         </div>

//     )
// }
// export default Navbar;

// const ulnavbar = {
//     listStyleType: "none",
//     display :"flex",

// }
// const linavbar = {
//     listStyleType: "none",
//     marginright:10,
//     textDecoration: "none",
//     padding:5,


// }
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartCompra from "../../componentes/carrito";
import { createTheme, ThemeProvider } from '@mui/material/styles';





 const NavBar=() => {




  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static " color="rosapastel">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GLAMUR
          </Typography>

          <CartCompra/>   

            {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}


const theme = createTheme({
  palette: {
    rosapastel: {
      main: '#f8b7bd',
      contrastText: '#fff',

    },
  },
});

export default NavBar;