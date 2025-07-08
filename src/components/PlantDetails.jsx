import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePlantDetails from '../hooks/usePlantDetails';
import imgFallback from '../assets/planta-respaldo.avif'


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
 if(!plant){
  return(
    <div className='errorPlantText'>
      <p>Plant was not found</p>
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
    <div className='container'>
      <div className='plantImg'>
        <img src={plant.default_image?.regular_url || imgFallback } />
         </div>
      <div className='plantInfo'>
        <h3>{plant.common_name}</h3>
        <h5>{plant.scientific_name[0]}</h5>
        <p>{plant.description}</p>
        <p>Genus: {plant.genus}</p>
        <p>Type: {plant.type}</p>
        {poisonous()}
        <button className='btnBackList' 
      onClick={() => navigate("/species-list")}>Go back to List</button>
         </div>
    </div>
  )
}

export default PlantDetails