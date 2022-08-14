import { Item } from './Item';
import './ItemList.css';

export function ItemList ({ products }) {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-6 listContainer'>
      {
          products.map(data =>{
            console.log(data)
            return(
            <Item
            data={data}
            />
          )
        })}
      </div>
    </div>
  )
};