import React from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { useCartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom";
import { ItemCart } from "../ItemCart/ItemCart";

export const Cart = () => {
    const {cart, totalPrecio} = useCartContext();

    const order = {
        buyer: {
            name: 'Paola',
            email: 'paolanu@gmail.com',
            phone: '3517658746',
            address: 'lomito'
        },
        items: cart.map(product => ({id: product.id, tittle: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrecio(),
    }
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id));
    }
    

    if (cart.length === 0){
    return (
        <>
            <p>No hay elementos en la cesta</p>
            <Link to='/'>Ir a comprar</Link>
        </>
    );
    }

return (
    <>
    {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <p>
        Total a Pagar: {totalPrecio()}
    </p>
    <button onClick={handleClick}>Emitir Compra</button>
    </>
)
}