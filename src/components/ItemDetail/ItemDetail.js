import { ItemCount } from "../ItemCount/ItemCount"
import React, {useState} from "react";
import { Link } from "react-router-dom";



export const ItemDetail = ({imgUrl, price, id, description, title}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
    setGoToCart(true);
    };
    return (
        <div className="details">
            <div className="big-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{title}</h2>
                    <span>${price}</span>
                </div>
                <p>{description}</p>
                {
                    goToCart
                    ? <Link to='/cart'>Terminar Compra</Link>
                    : <ItemCount initial={3} stock={5} onAdd={onAdd}></ItemCount>
                }
            </div>
        </div>
    )}
