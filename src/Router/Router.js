import { NavBar } from "../components/NavBar/NavBar"
import { ItemListContainer } from "../components/Item/ItemListContainer"
import { ItemDetailContainer } from "../components/ItemDetail/ItemDetailContainer"
import { Cart } from "../components/Cart/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/data/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
    </>
    )
}