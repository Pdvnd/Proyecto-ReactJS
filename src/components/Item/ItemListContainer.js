import React, { useState, useEffect } from "react";
import { Contenido } from "./Data/Data";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ }) => {
  const [data, setData] = useState([]);
  const  {categoriaId}  = useParams();
  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Contenido);
    }, 2000);
  });

  useEffect(() => {
    
  
      getData.then((res) =>{
      const filteredData = res.filter((Contenido) => Contenido.category === categoriaId)
      setData(filteredData)
      console.log(filteredData)
    })
  
  }, [categoriaId]);

  return (
    <>
      <ItemList data={data} />
    </>
  );
};
//<Contenido greeting={texto}/>
