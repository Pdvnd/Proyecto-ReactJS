import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Contenido } from "../Item/Data/Data";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const {detallesId} = useParams();
    const [data, setData] = useState({});



    useEffect (()=> {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(Contenido);
            }, 1000);
        });
        if (Contenido){
            getData.then(res=> setData(res.find(Contenido => Contenido.id === parseInt( detallesId))));
            }
    },[]);
    return (
        <div >
            {<ItemDetail key ={data.id} 
            data={data}></ItemDetail>}
        </div>
    );
};