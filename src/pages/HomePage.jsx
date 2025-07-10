import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import './HomePage.css'


function HomePage() {

  const navigate = useNavigate();
  const handleViewPlants = () => {
    navigate('/species-list')
   }

 const handleSearch = (term) => {
    navigate(`/species-list?q=${term}`);
  };
  
  return (
    <>
    <div className='homePageContainer'>
    <h1 className='title'>Welcome to my Plant App</h1>
    <p className='description'>Where you can search and learn about lots of different plants!</p>


    <SearchBar onSearch={handleSearch} />

    <button className='viewPlants' onClick={handleViewPlants}>View Plants</button>
    </div>
    </>
  )
}

export default HomePage