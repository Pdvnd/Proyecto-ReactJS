import React from "react"
import { useCartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom";
import { ItemCart } from "../ItemCart/ItemCart";

export const Cart = () => {
    const {cart, totalPrecio} = useCartContext();

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
        total: {totalPrecio()};
    </p>
    </>
)
}