import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { Contenido } from '../Item/Data/Data';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const {detalleId} = useParams();
    const [data, setData] = useState({});



    useEffect (()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', '1');
        getDoc(queryDoc)
        .then(res => console.log(res, res.data()))
    },[]);
    return (
        <div >
            {<ItemDetail key ={data.id} 
            data={data}></ItemDetail>}
        </div>
    );
};