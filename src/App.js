// import logo from './logo.svg';
import './App.css';
import { ItemContainer } from './Item-conteiner';
import CartCompra from './carrito';
import DetallesProducto from './item-id';
import NavBar from './navbar';
import ContexProvider from './context';
// import Main from './pages/main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './cart';

function App() {
  return (
    
      <BrowserRouter>
      <ContexProvider>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemContainer />} />
          <Route path={'/productos/:categoria'} element={<ItemContainer />} />
          <Route path={'/item/:id'} element={<DetallesProducto />} />

          <Route path={'/carrito'} element={<CartCompra />} />
          <Route path={'/cart'} element={<Cart/>} />
          <Route path='*' element={<Navigate to="/" replace={true} />} />
        </Routes>
        </ContexProvider>
      </BrowserRouter>
    

  );
}

export default App;
