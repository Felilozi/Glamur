
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, Box, Toolbar, Typography } from '@mui/material';
import imagen from "./logo.png";
import {  useNavigate } from 'react-router-dom';
import CartCompra from '../contenedorCarrito/carrito';
import { AppContext } from '../context';



const NavBar = () => {
  const { quantityCart } = React.useContext(AppContext);
  const navegacion = useNavigate()
  const navegacionCompra =() =>{
      navegacion('/productos/all');
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" color="rosapastel">
          <Toolbar>
              <Box onClick={navegacionCompra} component="img" src={imagen} alt='logo' sx={{ width: 70, height: 70 }} />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GLAMUR
            </Typography>
            {
              quantityCart === 0 ? null :
                <Box>
                  <CartCompra cartQuantity={quantityCart} />
                </Box>}
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