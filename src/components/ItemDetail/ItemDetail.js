import { ItemCount } from "../ItemCount/ItemCount"
import { ItemList } from "../Item/ItemList";


export const ItemDetail = ({data}) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    };

    return (
        <div className="details">
            <div className="big-img">
                <img src={data.imgUrl} alt="" />
            </div>
            <div className="box">
                <div className="row">
                    <h2>{data.title}</h2>
                    <span>$ {data.rice}</span>
                </div>
                <p>{data.description}</p>
                <ItemCount
                    onAdd={onAdd}
                    />
                <ItemList props ={data}/>
            </div>
        </div>
    )}
