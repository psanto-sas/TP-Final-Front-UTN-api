import React, { useState } from 'react'
import usePerenualAPI from '../hooks/usePerenualAPI.js'
import Pagination from '../components/Pagination.jsx'
import Plants from '../components/Plants.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useSearchParams, Link } from 'react-router-dom'
import './PlantPage.css'

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
    setSearchTerm(term); 
  };
  const handleClearSearch = ()=>{
    setSearchParams({});
    setSearchTerm('');
  }

  return (
  <>
  <div className='header'>
    <h1 className='title'><Link className='linkBTH' to='/'>Plants</Link></h1>
    <SearchBar onSearch={handleSearch} />
    <p className='btnClearSearch' 
      onClick={handleClearSearch}>Clear Search</p>
    </div>
    <div className='container1'>
      <Pagination onNext={onNext} onPrevious={onPrevious} />
      <Plants plants={plants}/>
      <Pagination onNext={onNext} onPrevious={onPrevious} />
    </div>
    <footer>
      <p className="apiLink">Perenual API: <a className='linkFooter' target='_blank' href="https://perenual.com/docs/api">https://perenual.com/docs/api</a></p>
    </footer>
  </>
  )
}
export default PlantPage
