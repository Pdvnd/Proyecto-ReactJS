import { ItemCount } from '../ItemCount/ItemCount';
import './ItemList.css';
import React from 'react'
import { Link } from 'react-router-dom'



export function Item ({data}){
  return(
    <div className='col'>
    <div className='card text-center'>
      <img src={data.imgUrl} className='card-img-top' alt='imagen' />
      <div className='card-body'>
        <h5 className='card-title'>{data.title}</h5>
        <p className='card-text'>${data.price}</p>
      </div>
    </div>
    <ItemCount key = {data.id} stock={data.stock}></ItemCount>
    <Link to={`/data/${data}`} className="btn detailsBtn">Ver detalle</Link>
  </div>
)
}