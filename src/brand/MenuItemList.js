import foodlist from "../hotelsData/FoodItemListData";

const MenuItemList = ({catid,menuid}) =>{
   // Find the hotel with hotel_id 1
  // console.log('categoreyid'+catid);
  // console.log('menuid'+menuid);
  // Find the food category with id 1 within the found hotel
  var foodItemList = foodlist.filter(item=>item.hotel_id == menuid && item.food_category_id == catid);
  
  var foodItemListData = foodItemList.map(itemlist=> itemlist.food_items.map(
                                          item=><li key={item.id}><p className="text-white">
                                          {item.name} </p></li>));

  return(
    <ul>
        {foodItemListData}
    </ul>
  )
}

export default MenuItemList;