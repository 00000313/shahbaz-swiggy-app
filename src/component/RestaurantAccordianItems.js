import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/Slice/cartSlice";
import {useDispatch} from "react-redux"


const RestaurantAccordianItems = ({items})=>{

   const dispatch = useDispatch();


const handleAddItem=(item)=>{
   console.log("ITEM" , item)
   dispatch(addItem(item));
}



return  (<div>
           {items.map((item)=>(
             <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
              <div className="w-10/12"> 
                   
                 <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price/100}</span>
                </div>
                {console.log(item.card.info)}
                <p className="text-xs">{item.card.info.description}</p>
              </div>
               <div className="w-4/12 relative">
                  <img className="w-50" src={CDN_URL+item.card.info.imageId} />
                  <button  className="bg-red-500 text-white top-4/6 left-2/4 w-26 rounded-lg absolute bottom-1 text-xl hover:cursor-pointer"
                  onClick={()=>handleAddItem(item)}
                  >Add+</button>
              </div>
              </div>
           ))}
      </div>)
    
}

export default RestaurantAccordianItems;