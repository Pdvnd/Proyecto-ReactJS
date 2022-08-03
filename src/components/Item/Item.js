import './ItemCss';
import { ItemCount } from '../ItemCount/ItemCount';

function Item (props){
  return(
    <div className='col'>
    <div className="card text-center">
      <img src={imgUrl} className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">$ {props.price}</p>
      </div>
    </div>
    <ItemCount key = {props.id}></ItemCount>
  </div>
)
}

export default Item;