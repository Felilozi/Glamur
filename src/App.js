// import logo from './logo.svg';
import './App.css';
import { ItemContainer } from './componentes/Item-conteiner';
import CartCompra from './componentes/carrito';
import DetallesProducto from './componentes/item-id';
import NavBar from './componentes/navbar';
// import Main from './pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path={'/'} element={<ItemContainer />} />
        <Route path={'/productos/:categoria'}  element={<ItemContainer />} />
        <Route path={'/item/:id'}  element={<DetallesProducto/>} />

        <Route path={'/carrito'} element={<CartCompra/>} />

      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
