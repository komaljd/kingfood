import { useState } from "react";
import foodlist from "../../hotelsData/FoodItemListData";
import FoodListItems from "./FoodListItems";
import FoodItemListField from "./FoodItemListField";
import { SearchFoodItem } from "./SearchFoodItem";

const FilterableFoodList = ({menuid}) =>{
    const [searchfood, setSearchFood]=useState();

    const handleSearchOnChagne = (e) =>{
        setSearchFood(e.target.value);
    }

    // const searchResult = SearchFoodItem(foodlist,searchfood);
    const searchResult = SearchFoodItem(foodlist,searchfood);
    // const searchResult = foodlist;

    return(
        <>
            <FoodItemListField search={searchfood} onSearch={handleSearchOnChagne}/>
            {
                searchResult ? <FoodListItems menuid={menuid} fooditems={searchResult}/> : 'no data'
            }
        </>
    );
    
}

export default FilterableFoodList;