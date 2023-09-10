// import { useState } from "react";
// import { Link } from "react-router-dom";
import fooditems from "../hotelsData/FoodItemData";
import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuCategory = ({menuid}) =>{
    const [categoreyid, setCategoreyId] = useState(1);

   const handleClickCategoryId = (e) =>{
    // setCategoreyId(e.target.value);
    alert(e.target.value);
    }

    //food Item array fetch
    var foodItemList = fooditems.filter(flistid=> flistid.hotel_id == menuid);
    var foodItemCategory = foodItemList.map(item=> (item.food_category.map(foodItem =>
                           <button onClick={handleClickCategoryId}
                                    value={foodItem.id}> {foodItem.name} </button>
                            )));

    // const [show, setShow] = useState(false);
    // const handleClick = () =>{
    //     setShow(!show);
    // }
    return(
       <>
        <ul>
            <li categoreyid={categoreyid}> {foodItemCategory} </li>
        </ul>
        {categoreyid && 
            <MenuItemList catid={categoreyid}/>
        }
       </>
    );
}

export default MenuCategory;