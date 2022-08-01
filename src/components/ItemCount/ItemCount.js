import './ItemCount.css'
import React, { useState, useEffect} from 'react';

export const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    }
    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    useEffect(() => {

    }, [count])



    return (
        <div>
            <div className='containerBtn'>
                <button onClick={handleAdd} type="button" className='circleBtn'>+</button>
                <p><spam className='count'>{count}</spam></p>
                <button onClick={handleRemove} type='button' className='circleBtn'>-</button>
            </div>
            <div>
            <img src='https://cdn.awsli.com.br/800x800/396/396949/produto/62677338/9d9e008251.jpg'className='card-img-top'  alt='imagen' />
            </div>
            <button onClick={() => onAdd(count)} type='button' className='addCart btnCart'>Añadir al carrito</button>
        </div>
        
    )
    
}
