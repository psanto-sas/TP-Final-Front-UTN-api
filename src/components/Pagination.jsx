import React from 'react'


function Pagination({ onPrevious, onNext}) {
  // currentPage, lastPage
  const handlePrevious = () => {
    onPrevious();
  }
  const handleNext = () => {
    onNext();
  }
  
  return (
    <div>
      <button className="previous" onClick={handlePrevious}>Previous Page</button>
      <button className='next' onClick={handleNext}>Next Page</button>
    </div>
  )
}

export default Pagination