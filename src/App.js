import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer"
import { Cart } from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import React from "react";
import { CartProvider } from "./CartContext/CartContext";

function App() {
  return (
  <>
    <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
        </CartProvider>
    </BrowserRouter>
  </>
  )}

export default App;