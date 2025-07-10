import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePlantDetails from '../hooks/usePlantDetails';
import imgFallback from '../assets/planta-respaldo.avif'
import './PlantDetails.css'

function PlantDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { plant, loading, error} = usePlantDetails(id);

  if(loading){
   return(
   <div className="loadingText">
      <p> Loading plant details... </p>
    </div>
   )}

   if(error){
    return(
      <div className="errorText">
      <p> Error: ${error.message} </p>
      <button className='btnBackList' 
      onClick={() => navigate("/species-list")}>Go back to List</button>
    </div>
    )
   }
 if(loading === true && !plant){
  return(
    <div className='errorPlantText'>
      <p>Loading plant</p>
      <button className='btnBackList' 
      onClick={() => navigate("/species-list")}>Go back to List</button>
    </div>
  )
 }
 const poisonous = ()=> {
  if(plant.poisonous_to_humans === true || plant.poisonous_to_pets === true){
    return(
      <p>Poisonous</p>
    )
  } else {
    return(
      <p>Not poisonous</p>
    )
  }
 }

  return (
    <div className='container2'>
      <div className='plantImg'>
        <img className='imgDetail' src={plant.default_image?.regular_url || imgFallback } />
         </div>
      <div className='plantInfo'>
        <h3 id='detailTitle'>{plant.common_name}</h3>
        <h5 id='detailSN'>"{plant.scientific_name[0]}"</h5>
        <p className='detail'>{plant.description}</p>
        <p className='detail'>Genus: {plant.genus}</p>
        <p className='detail'>Type: {plant.type}</p>
        {poisonous()}
        <div className='divBTN'>
          <p className='btnBackList' 
           onClick={() => navigate("/species-list")}>Go back to List</p>
        </div>
         </div>
    </div>
  )
}

export default PlantDetails