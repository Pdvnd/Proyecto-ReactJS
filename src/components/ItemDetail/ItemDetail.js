import { ItemCount } from "../ItemCount/ItemCount"
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";
import { Cart } from "../Cart/Cart";



export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {agregarProducto} = useCartContext();

    const onAdd = (quantity) => {
    setGoToCart(true);
    agregarProducto(data, quantity);
    };
    
    return (
        <div className='details'>
            <div className='big-img'>
                <img src={data.imgUrl} alt="" />
            </div>
            <div className='box'>
                <div className='row'>
                    <h2>{data.title}</h2>
                    <span>${data.price}</span>
                </div>
                <p>{data.description}</p>
                {
                    goToCart
                    ? <Link onClick={Cart} className='btn detailsBtn' to='/cart'>Terminar Compra</Link>
                    : <ItemCount initial={5} stock={data.stock} onAdd={onAdd}></ItemCount>
                }
            </div>
        </div>
    )}
