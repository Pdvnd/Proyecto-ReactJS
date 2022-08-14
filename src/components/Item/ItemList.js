import { Item } from './Item';
import './ItemList.css';


export const ItemList = ({props}) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-6 listContainer">
        {
          props.map((prop) =>
            <Item
              id={prop.id}
              imgUrl={prop.imgUrl}
              title={prop.title}
              price={prop.price}
            />
          )
        }
      </div>
    </div>
  )
};