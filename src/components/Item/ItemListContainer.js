import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Titulo } from "../Titulo/Titulo";
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const  {categoriaId}  = useParams();

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
if (categoriaId){
  const  queryFilter = query(queryCollection, where('category', '<=', categoriaId));
  getDocs(queryFilter)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))));
}
    else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))));
    }
    setData(data)
    setLoad(false)
  
  }, [categoriaId]);

  return (
    <div className="row row-cols-2 row-cols-md-3 g-6">
    {load && <Loader/>}
      <Titulo/>
      <ItemList
        data={data}
      />
    </div>

  );
};

