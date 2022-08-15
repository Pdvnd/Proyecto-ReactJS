import { Link } from 'react-router-dom';
import './ItemList.css';
import React from 'react';





//<ItemCount key = {id} stock={data.stock}></ItemCount>
//<Link to={`/data/${data}`} className="btn detailsBtn">Ver detalles</Link>

export function Item ({data}) {
  return(
    <div className='col'>
    <div className='card text-center'>
      <img src={data.imgUrl} className='card-img-top' alt='imagen' />
      <div className='card-body'>
        <h5 className='card-title'>{data.title}</h5>
        <p className='card-text'>${data.price}</p>
        <p className='card-text'>{data.category}</p>
        <Link to={`/detalle/${data.id}`} className="btn detailsBtn">Ver detalles</Link>
      </div>
    </div>
  </div>
)};