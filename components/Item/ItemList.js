import './Item.css';
import { Data } from './Data/Data';

function ItemList ({ products }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-6 listContainer">
      {
          products.map(data =>{
            return(
            <Data
              id={data.id}
              imgUrl={data.imgUrl}
              title={data.title}
              price={data.price}
            />
          )
        })}
      </div>
    </div>
  )
};

export default ItemList;