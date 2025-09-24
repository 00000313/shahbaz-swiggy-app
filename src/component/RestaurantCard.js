import {CDN_URL} from '../utils/constants'

const ResteaurantCard =({restaurant})=>{
  console.log("THIS IS RUNNING")
  let {name , cuisines ,avgRating , sla ,cloudinaryImageId , costForTwo} = restaurant;
  cuisines = cuisines.join(", ");
  return (
    <div className='m-4 p-4 w-[218px] rounded-lg bg-gray-100 hover:bg-gray-200'> 
     <img 
     className='w-50 h-37 rounded-lg'
     alt="meghna-food" 
     src={`${CDN_URL}${cloudinaryImageId}`}
     />
     <h3 className='font-bold py-4 text-xl'>{name}</h3>  
     <h4>{cuisines}</h4>  
     <h4>{avgRating}</h4>
     <h4>{costForTwo}</h4>
     <h4>{sla.slaString}</h4>    
</div>
  )
}

export const withPoweredLable = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div>
     <label className='absolute p-2 bg-black text-stone-200 m-2 rounded-lg'>Promoted</label>
     <RestaurantCard 
      restaurant={props.restaurant}/>
     </div>
     )
  }
}

export default ResteaurantCard;