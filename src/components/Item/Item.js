import { ItemCount } from '../ItemCount/ItemCount';
import './ItemList.css';
import React from 'react';
import { Link } from 'react-router-dom';


//<ItemCount key = {id} stock={data.stock}></ItemCount>
//<Link to={`/data/${data}`} className="btn detailsBtn">Ver detalles</Link>

export function Item ({picture, lastName, firstName, id}){
  return(
    <div className='col'>
    <div className='card text-center'>
      <img src={picture} className='card-img-top' alt='imagen' />
      <div className='card-body'>
        <h5 className='card-title'>{lastName}</h5>
        <p className='card-text'>${firstName}</p>
      </div>
    </div>
  </div>
);
};