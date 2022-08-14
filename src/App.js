import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer"
import { Cart } from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
  <>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Data/:DataId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  </>
  )}

export default App;