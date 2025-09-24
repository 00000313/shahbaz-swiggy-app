import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../../src/utils/useRestaurantMenu'
import { useParams } from "react-router-dom";
import RestaurantCategory from '../component/RestaurantCategory'

const RestaurantComponent = () =>{
    const {resId}= useParams();
     const restaurant = useRestaurantMenu(resId);
     const [showIndex , setShowIndex] = useState();

     if(restaurant === null) return <Shimmer />
     const { name , cuisines  } = restaurant?.cards[2]?.card?.card?.info

     const Menu = restaurant?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards  || restaurant?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.categories[0].itemCards;
      const cetrgories = restaurant?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
         return c.card.card?.['@type'] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      })
      return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>  
        {
          cetrgories.map((category, index)=>{
            //controlled component
            {console.log("SHOW INDEX VAl", showIndex)}
            return <RestaurantCategory  
                   key={category?.card?.card?.categoryId} 
                    data={category?.card?.card}
                    
                    showItems={index === showIndex ? true :false}
                    setShowIndex={()=> {
                      console.log(showIndex , index)
                      if(showIndex === index) {console.log("CONDIOTONO IS TRUE") 
                                              setShowIndex(undefined)}
                      setShowIndex(index)
                    }}
                  />
})
        }
        </div>
    );
}

export default RestaurantComponent;