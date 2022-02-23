import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Disclaimer from './components/Disclaimer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  /*Renderizado*/
  return (
    <CartContextProvider>
      <BrowserRouter>  
        <Disclaimer/>    
        <NavBar/>         
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>     
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;