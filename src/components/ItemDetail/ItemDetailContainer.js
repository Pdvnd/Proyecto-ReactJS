import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "../Spinner/Spinner";
import { Data } from "../Item/Data/Data";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const {categoriaId} = useParams();
    const [data, setData] = useState({});
    const [loading] = useState(true);


    useEffect (()=> {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(Data);
            }, 1000);
        });
        if (Data){
            getData.then(res=> setData(res.filter(data => data.category === categoriaId)));
            } else {
            getData.then(res=> setData(res));
            } ;
    },[categoriaId]);
    return (
        <div >
            {loading ? <Spinner/> : <ItemDetail props ={data}></ItemDetail>}
        </div>
    );
};