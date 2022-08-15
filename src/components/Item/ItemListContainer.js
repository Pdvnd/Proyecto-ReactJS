import React, { useState, useEffect } from "react";
import { Contenido } from "./Data/Data";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({texto}) => {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams();
  useEffect(() => {
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(Contenido)
      }, 2000)
    });
    if (categoriaId){
      getData.then(res => res.filter(Contenido => Contenido.category === categoriaId));
    }
    else {
      getData.then(res => setData(res));
    }
    
  
  }, [categoriaId])

  return (
    <>
      <ItemList Data={Contenido}/>
      <Contenido greeting={texto}/>
    </>
  );
};
