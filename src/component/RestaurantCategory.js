import RestaurantAccordianItems from "./RestaurantAccordianItems";

const RestaurantCategory = ({data ,showItems, setShowIndex}) =>{
    console.log("TOSDif")
     
    const onHandleClick =()=>{
      setShowIndex();
    }

    return (
     <div>
     <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg p-4 ">
     <div className="flex justify-between cursor-pointer"   onClick={onHandleClick}>
      <span className="font-bold text-lg ">{data?.title+" "+"("+data?.itemCards?.length+")"}</span>
      <span>⬇️</span>
     </div> 
      {/* {data?.itemCards?.map((item)=>{
        return <RestaurantAccordianItems  key={item?.card?.info?.id} data={item?.card?.info} />
      })} */}
      {console.log("LAKJD",showItems)}
      {showItems && <RestaurantAccordianItems  items={data.itemCards} />}
     </div>
      <div>

      </div>
    </div>
    )
}
export default RestaurantCategory;