import fooditems from "../hotels/FoodItem";

const MenuItemList = ({menuid,catid}) =>{
    console.log('catid is:'+catid);
    //Find the hotel with dynamic hotel id 
    var foundHotel = fooditems.find((hotel) => hotel.hotel_id == menuid);
    //Found the food category with dynamic selected food_item Id withing found hotel
    // car foundCategoryId = foundHotel && 
    return(
        <>
            {foodItemListfilter}
        </>
    )
}

export default MenuItemList;