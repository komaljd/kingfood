import foodlist from "../../hotelsData/FoodItemListData";

const MenuItemList = ({catid,menuid}) =>{
   // Find the hotel with hotel_id 1
  // console.log('categoreyid'+catid);
  // console.log('menuid'+menuid);
  // Find the food category with id 1 within the found hotel
  var foodItemList = foodlist.filter(item=>item.hotel_id == menuid && item.food_category_id == catid);
  //  count of total food item
  //var foodItemCount = foodItemList.length; 
  const handleClick = () =>{
    console.log("run");
  }
  return(
    <div>
      <ul className="OnlineOrder-Item-list">
        {
          foodItemList.map(itemlist=> itemlist.food_items.map(
            item=>
            <li  key={item.id}>
              <h5> {item.name} </h5>
              <p> Price: {item.price}</p>
              <button className="btn btn-custom" onClick={handleClick}>ADD</button>
            </li> ))
        }
      </ul>
    </div>
  )
}

export default MenuItemList;