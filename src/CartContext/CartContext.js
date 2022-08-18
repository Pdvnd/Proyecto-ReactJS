import React, { useState, useContext } from "react";
export const useCartContext = () => useContext(CartContext);
const CartContext = React.createContext([]);




export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = {...item, quantity: quantity};
            newCart = [...cart, product];
        }
        setCart(newCart);
    }
    console.log('Carrito :' , cart);
    const limpiarCart = () => setCart([]);
    const enElCarrito = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    const quitarCarrito = (id) => setCart(cart.filter(product => product.id !== id));
    return (
        <CartContext.Provider value={{
            limpiarCart, enElCarrito, quitarCarrito, agregarProducto }}>
            {children}
        </CartContext.Provider>
    )
}