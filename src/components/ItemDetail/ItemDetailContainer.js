import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemResponse, setItemResponse] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect (()=> {
        (async ()=> {
            try {
                setLoading(true);

                const response = await DummyApi.getDetail(id);
                const responseJson = await response.json();
                setItemResponse(responseJson);
            } catch (error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);
    return (
        <div className={styles.ItemDetailContainer}>
            {loading ? <Spinner/> : <ItemDetail item={itemResponse}></ItemDetail>}
        </div>
    );
};