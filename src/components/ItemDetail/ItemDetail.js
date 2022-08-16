import { ItemCount } from "../ItemCount/ItemCount"
import React, {useState} from "react";
import { Link } from "react-router-dom";



export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
    setGoToCart(true);
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
                    ? <Link to='/cart' className='btn detailsBtn'>Terminar Compra</Link>
                    : <ItemCount initial={3} stock={5} onAdd={onAdd}></ItemCount>
                }
            </div>
        </div>
    )}
