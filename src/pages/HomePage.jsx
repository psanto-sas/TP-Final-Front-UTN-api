import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import './HomePage.css'
import { Navigate } from 'react-router-dom'




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
    <h1 className='title'>Welcome to my Plant App</h1>
    <p className='description'>Where you can search and learn about lots of different plants!</p>


    <SearchBar onSearch={handleSearch} />

    <button className='viewPlants' onClick={handleViewPlants}>View Plants</button>
    </>
  )
}

export default HomePage