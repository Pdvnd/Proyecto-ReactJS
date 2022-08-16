import React, { useState, useEffect } from "react";
import { Contenido } from "./Data/Data";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const  {categoriaId}  = useParams();
  const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Contenido);
    }, 1000);
  });


  useEffect(() => {
    
  
      getData.then((res) =>{
      const filteredData = res.filter((Contenido) => Contenido.category === categoriaId)
      setData(filteredData)
      setLoad(false)
      
    });
    if (categoriaId){
      
    }
    else {
      getData.then(res => setData(res));
    }
  
  }, [categoriaId]);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
      {load && <Loader />}
      <ItemList
        data={data}
      />
    </div>

  );
};

