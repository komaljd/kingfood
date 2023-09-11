
import menucategory from "./MenuCategoryData";
// import fooditems from "../hotelsData/FoodItemData";
import MenuCategoryItem from "./MenuCategoryItem";

const MenuCategoryList=()=>{

    const menuItemList=menucategory.map(category=><MenuCategoryItem menuitem={category} menucatname={category.name}/>)
    return(
        <>
              {menuItemList}
        </>
          
        
    );
}

export default MenuCategoryList;

