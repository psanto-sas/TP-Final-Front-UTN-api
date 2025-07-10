import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './Plants.css'
import imgFallback from '../assets/planta-respaldo.avif'


function Plants({plants}) {
  const navigate = useNavigate();

  if(!plants || plants.length === 0){
    return(
      <>
      <h4>No plant was found</h4>
      </>
    )
  } 
  
  
  return (
    <div className='containerMap' style={{}}>
      {plants.map((plant) => (
        
          <div key={plant.id} className="card" onClick={() => navigate(`/species/details/${plant.id}`)}>
            <img src={plant.default_image?.regular_url || imgFallback } alt="imagen card" 
            className="imgCard" />
            <div className="cardBody">
            <h5 className="cardTitle">{plant.common_name}</h5>
            <p className='cardData'>Scientific name: {plant.scientific_name}</p>
            <p className='cardGenus'>Genus: {plant.genus}</p>
            <p className='cardData'>Other name: {plant.other_name?.length > 0 ? plant.other_name.join(", ") : "none"}</p>
            </div>
          </div>
        
      ))}
    </div>
  )
}
Plants.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      common_name: PropTypes.string,
      scientific_name: PropTypes.string,
      default_image: PropTypes.shape({
        regular_url: PropTypes.string,
      })
    })
  ).isRequired,
};

export default Plants