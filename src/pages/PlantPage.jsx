import React, { useState } from 'react'
import usePerenualAPI from '../hooks/usePerenualAPI.js'
import Pagination from '../components/Pagination.jsx'
import Plants from '../components/Plants.jsx'
import SearchBar from '../components/SearchBar.jsx'



function PlantPage() {
  
  //datos del hook
  const {plants, loading, error, setSearchTerm, onPrevious, onNext } = usePerenualAPI( );
  


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

  return (
  <>
  <div className='header'>
    <h1 className='title'>Plants</h1>
    <SearchBar onSearch={setSearchTerm} />
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