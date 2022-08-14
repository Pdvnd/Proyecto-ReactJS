import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "../Spinner/Spinner";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemResponse, setItemResponse] = useState({});
    const [loading, setLoading] = useState(true);
    
    const url = "https://dummyapi.io/data/v1/user?limit=10"
    const config = {
        headers:{
            'app-id': '62f7d88ba2c94cfbf0c7e200'
        }
    }
    useEffect (()=> {
        (async ()=> {
            try {
                setLoading(true);

                const response = await fetch(url, config);
                const responseJson = await response.json();
                console.log(responseJson.data[0])
                setItemResponse(responseJson);
            } catch (error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);
    return (
        <div >
            {loading ? <Spinner/> : <ItemDetail item={itemResponse.data[0]}></ItemDetail>}
        </div>
    );
};