import { ItemCount } from "../ItemCount/ItemCount"
import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { context } from "../../CartContext/CartContext";
import { Cart } from "../Cart/Cart";
import './ItemDetail.css';



export const ItemDetail = ({data}) => {
    const { imgUrl, title, price, description, id } = data;

    const { cart, handleAddItem } = useContext(context)

    const handleClg = () => {
        handleAddItem(data, id, amountItemCount)
    }

    const [amountItemCount, setAmountItemCount] = useState(null);
    const onAdd = (count) => {
        setAmountItemCount(count)
    };
    return (
            <div className="details">
                <div className="big-img">
                    <img src={data.imgUrl} alt="" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{data.title}</h2>
                        <span className='pricedetail'>Precio: $ {data.price}</span>
                        <span className='pricedetail'>Stock: {data.stock}</span>
                        <span className='pricedetail'>Category: {data.category}</span>
                    </div>
                    <p>{data.description}</p>
                    {
                        !amountItemCount && <ItemCount
                            initial={1}
                            stock={10}
                            onAdd={onAdd}
                        />
                    }
                    {
                        amountItemCount >= 1 &&
                        <Link onClick={handleClg} className="button buttonFinish" to="/cart">Terminar compra</Link>
                    }
                </div>
            </div>
        )
    }