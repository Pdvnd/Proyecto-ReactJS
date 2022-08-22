import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import './ItemCart.css'


export const ItemCart = ({ product }) => {
const  {quitarCarrito} = useCartContext();
    return (
        <div className='cart'>
            <div className='containerCart'>
                <div className='div1'>
                    <img className='img-cart' src={product.imgUrl} />
                </div>
                <div className='div2'>
                    <h2 className='name-cart'>{product.title}</h2>
                    <p>
                        <span className='price-cart'>${product.price}</span>
                    </p>
                    <p>
                        <span className='cant-cart'>{product.quantity * product.price}</span>
                    </p>
                </div>
                <div className='div3'>
                    <button
                        className='btn-delete'
                        onClick={() => {
                            quitarCarrito(product.id);
                        }}
                    >
                        <i class='far fa-trash-alt'></i>
                    </button>
                </div>
            </div>
        </div>
        
    );
};

