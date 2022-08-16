import './ItemCount.css'
import React, { useState, useEffect} from 'react';


export const ItemCount = ({ onAdd, initial, stock }) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleRemove = () => {
        if (count > initial) {
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
            </div>
            <button onClick={() => onAdd(count)} type='button' className="btn detailsBtn">Añadir al carrito</button>
        </div>
        
    )
    
}
