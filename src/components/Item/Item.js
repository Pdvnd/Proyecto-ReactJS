import { Link } from 'react-router-dom';
import './ItemList.css';
import React from 'react';





//<ItemCount key = {id} stock={data.stock}></ItemCount>
//<Link to={`/data/${data}`} className="btn detailsBtn">Ver detalles</Link>

export function Item ({contenido}) {
  return(
    <div className='col'>
    <div className='card text-center'>
      <img src={contenido.imgUrl} className='card-img-top' alt='imagen' />
      <div className='card-body'>
        <h5 className='card-title'>{contenido.title}</h5>
        <p className='card-text'>${contenido.price}</p>
        <Link to={`/detalle/${contenido.id}`} className="btn detailsBtn">Ver detalles</Link>
      </div>
    </div>
  </div>
)};