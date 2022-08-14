import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {
    const { imgUrl, title, price, description, id } = data;


    const [amountItemCount, setAmountItemCount] = useState(null);
    const onAdd = (count) => {
        setAmountItemCount(count)
    };
    return (
        <div className="details">
            <div className="big-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{title}</h2>
                    <span>$ {price}</span>
                </div>
                <p>{description}</p>
                {
                    <ItemCount
                        initial={0}
                        stock={10}
                        onAdd={onAdd}
                        data={data}
                    />
                }
                {
                    amountItemCount >= 1 &&
                    <Link className="button buttonFinish" to="/cart">Terminar Compra</Link>
                }
            </div>
        </div>
    )}
