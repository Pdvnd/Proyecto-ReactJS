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


//   useEffect(() => {
//     const collectionRef = categoriaId
//       ? query(collection(firestoreDb, 'productos'), where('category', '==', categoriaId))
//       : collection(firestoreDb, 'productos')

//     getDocs(collectionRef).then(response => {
//       const products = response.docs.map(doc => {
//         return { id: doc.id, ...doc.data() }
//       })
//       setData(products)
//       setLoad(false)
//     })

//   }, [categoriaId]);

//   return (
//     <div className="row row-cols-2 row-cols-md-3 g-6">
//       {load && <Loader />}
//       <ItemList
//         datas={data}
//       />
//     </div>


  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Productos');
if (categoriaId){
  const  queryFilter = query(queryCollection, where('category', '==', categoriaId));
  getDocs(queryFilter)
  .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))));
}
    else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))));
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

