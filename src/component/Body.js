import { useContext, useEffect, useState  } from "react";
import ResteaurantCard ,{ withPoweredLable }from "./RestaurantCard"
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineSatus";
import UserContext from '../utils/UserContext';



const Body = () =>{
  
    const [restaurants ,setRestaurants]  = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);
    const [searchText , setSearchText] = useState("");
    const {loggedInUser , setUserName} = useContext(UserContext)
    console.log(setUserName)
    
    const RestaurantCardPromoted = withPoweredLable(ResteaurantCard)
 
    
    let x=1;
    
     useEffect(()=>{
      fetchData();
    },[])
      
     const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7317086&lng=75.9029529&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ) 
        const json =await  data.json();
        setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants);
        setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants)
     }

     const onlineStatus = useOnlineStatus();

     if(onlineStatus === false) return <h1>Looks like your are offline</h1>

   //This is known as conditional redering.
   
   if(restaurants.length===0){
    return <Shimmer />
   }

 return (
  <div className='body'>
    <div className='filter flex gap-10 m-4'>
    <div className="search ">
      <input 
             type="text" 
             className="border border-solid border-black"
             value={searchText}
             onChange={(e)=>{
               setSearchText(e.target.value);              
             }}
             />
      <button
        className="px-4 bg-green-100 m-4 rounded-lg"
        onClick={()=>{
           const filteredRests = restaurants.filter((r)=>{
             return  r?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        })
           setFilteredRestaurants(filteredRests);
           console.log(filteredRests)  
        }}
        
       >Search</button>
    </div>
    <button className='px-4 bg-green-100 m-4 rounded-lg'
       onClick={()=>{
          const filterRest = restaurants?.filter((r)=> {
            return r.info.avgRating>4.2});
               setFilteredRestaurants(filterRest)
       }}
    >Top-Restaurants</button>
    <div>
    <label className="my-4">User Name : </label>
          <input type="text" 
          className="border border-solid my-4"
          value={loggedInUser}
          onChange={ (e)=>{
             setUserName(e.target.value)              
          }}
          />
    </div>
       </div>
    <div className='flex  flex-wrap  shadow-2xl '>
      {
      filteredRestaurants?.map((rest) => (
       <Link
         key={rest?.info?.id}
         to={"/restaurant/"+rest.info.id}
         >
       {
       x++ % 2 === 0 ? <ResteaurantCard  restaurant={rest.info}/> : <RestaurantCardPromoted  restaurant={rest.info}/>
       } 
  </Link>
      
    ))
    }
   
    </div>
    </div>
 );
}

export default Body;