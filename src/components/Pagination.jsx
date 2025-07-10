import React from 'react';
import './Pagination.css'
import Plants from './Plants';

function Pagination({ onPrevious, onNext}) {
  // currentPage, lastPage
  const handlePrevious = () => {
    onPrevious();
  }
  const handleNext = () => {
    onNext();
  }
  
  return (
    <>
      <ul className='pagination'>
      <li onClick={handlePrevious}>Previous Page</li>
      <li onClick={handleNext}>Next Page</li>
      </ul>
    </>
  )
}

export default Pagination