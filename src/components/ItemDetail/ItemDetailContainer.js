import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";



export const ItemDetailContainer = () => {
    const {detalleId} = useParams();
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);




    useEffect (()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
        setData(data)
        setLoad(false)
    },[detalleId]);
    return (
        <div >
            {load && <Loader />}
            <ItemDetail data={data}/>
        </div>
    );
};