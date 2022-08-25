import { Item } from './Item';
import './ItemList.css';
import React from 'react';

export const ItemList = ({data}) => {

    return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-6 listContainer'>
        {
          data.map((element =>
            <Item
            id={element.id}
            imgUrl={element.imgUrl}
            title={element.title}
            price={element.price}
            />
          )
        )}
      </div>
    </div>
  )
};