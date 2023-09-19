// import { useState } from "react";
// import { Link } from "react-router-dom";
// import fooditems from "../hotelsData/FoodItemData";
// import { useState } from "react";
// import MenuItemList from "./MenuItemList";

const MenuCategory = ({categoreyid,foodItemCategory}) =>{

    return(
       <>
       <ul className="OnlineOrder-Item color-white">
             {foodItemCategory} 
        </ul>
       </>
    );
}

export default MenuCategory;