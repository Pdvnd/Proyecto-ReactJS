import { useEffect } from "react";

const [data, setData] = useState([]);
useEffect(()=> {
    setTimeout(()=>{
        const task = new Promise ((resolve, reject) =>{
            setData()
            resolve()
            console.log('Descargado con exito', data);});
            task.then(()=> {
                console.log('Datos cargados'); })
                .catch((err)=> {
                    console.log('Error');
                })
            }, 2000)
    },[])
