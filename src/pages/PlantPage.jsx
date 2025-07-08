import React, { useState } from 'react'
import usePerenualAPI from '../hooks/usePerenualAPI.js'
import Pagination from '../components/Pagination.jsx'
import Plants from '../components/Plants.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useSearchParams } from 'react-router-dom'


function PlantPage() {
  
   const [searchParams, setSearchParams] = useSearchParams();
   const searchQuery = searchParams.get('q') || '';
  
  //datos del hook
  const {plants, loading, error, setSearchTerm, onPrevious, onNext } = usePerenualAPI(searchQuery);

  if(loading){
    return (
      <>
      <div className='loadingText'>Loading Plants...
            Wait a second
      </div>
      </>
    )
  }
  if(error){
    return(
      <>
      <div className='errorText'>Error occured while loading</div>
      <h4>{error.message}</h4>
      </>
    )
  }
  const handleSearch = (term) => {
    setSearchParams({ q: term });
    setSearchTerm(term); // También actualizás el estado en el hook
  };
  return (
  <>
  <div className='header'>
    <h1 className='title'>Plants</h1>
    <SearchBar onSearch={handleSearch} />
    </div>
    <div className='container'>
      <Pagination onNext={onNext} onPrevious={onPrevious} />
      <Plants plants={plants}/>
      <Pagination onNext={onNext} onPrevious={onPrevious} />
    </div>
  </>
  )
}
export default PlantPage