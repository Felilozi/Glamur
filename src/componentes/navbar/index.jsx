
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, Box, Toolbar, Typography } from '@mui/material';
import CartCompra from "../../componentes/carrito";
import imagen from "./logo.png";
import { Link } from 'react-router-dom';
import { AppContext } from '../context';


const NavBar = () => {
  const { quantityCart } = React.useContext(AppContext);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static " color="rosapastel">
          <Toolbar>
            <Link to={'/productos/all'}>
              <Box component="img" src={imagen} alt='logo' sx={{ width: 70, height: 70 }} />
            </Link>

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