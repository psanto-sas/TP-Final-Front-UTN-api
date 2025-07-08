import { useState, useEffect } from "react";

const usePerenualAPI = () =>{
    console.log('funciona')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [plants, setPlants] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [lastPage, setLastPage] = useState(null)
const [searchTerm, setSearchTerm] = useState('')

    const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
    const URL = `${import.meta.env.VITE_PERENUAL_BASE_URL}-list?key=${apiKey}&page=${currentPage}${searchTerm ? `&q=${searchTerm}`: ''}`;
    
  

    const fetchPlants = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(URL);

            if(!response.ok){
                return new Error(`Http error! Status: ${response.status}`)
            }

            const datos = await response.json();
            setPlants(datos.data);
            setCurrentPage(datos.current_page);
            setLastPage(datos.last_page);
            
        } catch (error) {
            console.error('Error fetching plants: ',error);
            setError(error)
            setPlants([])
        } finally {
            setLoading(false);
        }
    };

   useEffect (() => {
        if(URL){
            fetchPlants(URL)
        } else {
            setError( new Error('The .env that has the url of the API is not defined in the enviromental variables'))
            setLoading(false)
        }
}, [searchTerm, currentPage]);


//Pagination

const onPrevious = () => {
    if(currentPage > 1){
        setCurrentPage(currentPage - 1);
    }
};
const onNext = () => {
    if(currentPage < lastPage){
        setCurrentPage(currentPage + 1)
    }
};
const handleSearch = (term) =>{
      console.log('Buscando:', term);
    setSearchTerm(term);
    setCurrentPage(1);
};

return {
    plants,
    loading,
    error,
    currentPage,
    lastPage,
    onPrevious,
    onNext,
    setSearchTerm: handleSearch, 
}
}
export default usePerenualAPI
