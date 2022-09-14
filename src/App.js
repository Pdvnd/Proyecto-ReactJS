import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer"
import { Cart } from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import React from "react";
import {ContextProvider } from "./CartContext/CartContext";

function App() {
  return (
  <>
    <BrowserRouter>
        <ContextProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
        </ContextProvider>
    </BrowserRouter>
  </>
  )}

export default App;