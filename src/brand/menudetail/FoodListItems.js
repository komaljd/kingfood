const FoodListItems = ({fooditems,menuid}) =>{
    const foodItemListEachHotel = fooditems.filter(((HotelItem)=> HotelItem.hotel_id == menuid));
//    console.log('hotelid',foodItemListEachHotel);
    var foodItemsLIst = foodItemListEachHotel.map((item)=> (
        item.food_items.map((items)=><li key={items.id}>{items.name} <button>+</button></li>)
        ));
    return(
       <>
        <ul className="searchFoodItemLIst text-white">{foodItemsLIst}</ul>
       </>
    );
}

export default FoodListItems;