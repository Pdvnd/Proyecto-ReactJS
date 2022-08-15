import { Item } from './Item';
import './ItemList.css';
import React from 'react';
import { Contenido } from './Data/Data';



export const ItemList = ({data= []}) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-6 listContainer">
        {
          Contenido.map((Contenido =>
            <Item
              key ={Contenido.id} contenido={data}
            />
          )
        )}
      </div>
    </div>
  )
};