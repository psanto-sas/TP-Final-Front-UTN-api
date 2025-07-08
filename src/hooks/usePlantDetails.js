import { useState, useEffect } from "react";

const usePlantDetails = (plantId)=> {
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
    const URL = `${import.meta.env.VITE_PERENUAL_BASE_URL}/details/${plantId}?key=${apiKey}`;


useEffect(()=>{
    if(!plantId){
        setError(new Error('No id was detected'));
        setLoading(false);
        return;
    };
    const fetchPlant = async ()=> {
        setError(null);
        setLoading(false);
        try {
            const res = await fetch(URL)
            if(!res.ok){
                return(new Error(`Http Error! status: ${error.status} - The plant was not found`))
            };
            const datos = await res.json();
            setPlant(datos);
        } catch (error) {
            console.error(`Error ocurred while fetching the plant with the id ${plantId}`);
            setError(error);
            setPlant(null);
        } finally{
            setLoading(false);
        }
    }

fetchPlant()}, [plantId, URL]);
return {plant, loading, error}
}


export default usePlantDetails
