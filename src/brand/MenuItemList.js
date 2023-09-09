import fooditems from "../hotels/FoodItem";

const MenuItemList = ({menuid,catid}) =>{
    console.log('catid is:'+catid);
    var foodItemListfilter = fooditems
                            .filter((group) => group.hotel_id == menuid)
                            .map((group) => ({
                            ...group,
                            food_category: group.food_category.filter((item) => item.name),
                            }));
    console.log(foodItemListfilter);
//    var foodItemCatIdMatch = foodItemListfilter.filter(fcatitem =>  (fcatitem.food_category.filter(fcatid =>fcatid.id == catid)));

//    var foodItemCatIdMatch = foodItemListfilter.map(fcatitem => (fcatitem.food_category.filter(fcat=> fcat.id==catid).map(
//                                                                  items=> <p> {items.id} {items.food_items} </p>)));
  

    // var foodItemList = foodItemListfilter.map(item=> (item.food_category.map(foodItem =>
    //      <p key={foodItem.id}>{foodItem.food_items}</p>)));

    return(
        <>
            {foodItemListfilter}
        </>
    )
}

export default MenuItemList;