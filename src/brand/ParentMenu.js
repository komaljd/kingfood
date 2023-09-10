import { useState } from "react";
import fooditems from "../hotelsData/FoodItemData";
import MenuCategory from "./MenuCategory";
import MenuItemList from "./MenuItemList";

const ParentMenu = ({menuid}) =>{
    const [categoreyid, setCategoreyId] = useState(1);
    // const [active, setActive] = useState(false);

//    console.log(menuid);
    const handleClickCategoryId = (e) =>{
        setCategoreyId(e.target.value);
        // console.log(active);
    }   

    // categoreyid ? setActive(true) : setActive(false);

    //Found food item
    var foodItemList = fooditems.filter(flistid=> flistid.hotel_id == menuid);
    var foodItemCategory = foodItemList.map(item=> (item.food_category.map(foodItem =>
                            <li>
                                <button key={foodItem.id}  onClick={handleClickCategoryId}
                                    value={foodItem.id}> {foodItem.name} </button>
                            </li>
                            )));

    return(
        <div className="row">
            <div className="col-md-4">
                <MenuCategory categoreyid={categoreyid} foodItemCategory={foodItemCategory}/>        
            </div>
            <div className="col-md-8">
                <MenuItemList catid={categoreyid} menuid={menuid}/>
            </div>
        </div>  
    );
}

export default ParentMenu;