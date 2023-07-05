
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import CartCompra from "../../componentes/carrito";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import imagen from "./logo.png";
import { Link } from 'react-router-dom';



const NavBar = () => {




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

            <CartCompra />

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