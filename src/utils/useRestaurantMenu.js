import { useEffect, useState } from "react"
import { REST_URL } from "./constants";

const useRestaurantMenu =(resId) =>{
    console.log("props", resId)
    const [restaurant, setRestaurant] = useState(null);


    useEffect(()=>{
        fetchRestaurants();
    },[]);
  
     const fetchRestaurants= async ()=>{
      const data = await fetch(REST_URL + resId)
      const json = await data.json();
      setRestaurant(json.data);
     };
    return restaurant;

}

export default useRestaurantMenu;