import './App.css';
import { ItemContainer } from './contenedorProducto/Item-conteiner';
import CartCompra from './contenedorCarrito/carrito';
import DetallesProducto from './contenedor-detalle/detalle-item';
import NavBar from './navbar';
import ContexProvider from './context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './contenedorCarrito/cart';

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
