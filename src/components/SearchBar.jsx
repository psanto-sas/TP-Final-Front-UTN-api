import React, { useState } from 'react'
import './SearchBar.css'
import searchPng from '../assets/search.png'


function SearchBar({onSearch}) {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (input.trim()){
      onSearch(input.trim());
    }
  };
  return (
    <form className='searchForm' onSubmit={handleSubmit}>
      <input type="text" id='searchInput' placeholder='Search...'
      value={input} onChange={ (e) =>{
        setInput(e.target.value) }}
       />
       <button id='btnSubmit' type='submit'><img id='searchIcon' src={searchPng} alt="iconSearch" /></button>
    </form>
  )
}

export default SearchBar