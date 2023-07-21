// import logo from './logo.svg';
import './App.css';
import { ItemContainer } from './componentes/Item-conteiner';
import CartCompra from './componentes/carrito';
import DetallesProducto from './componentes/item-id';
import NavBar from './componentes/navbar';
import ContexProvider from './componentes/context';
// import Main from './pages/main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './componentes/cart';

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
