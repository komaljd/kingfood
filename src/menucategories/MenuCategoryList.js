
import menucategory from "./MenuCategoryData";
import MenuCategoryItem from "./MenuCategoryItem";

const MenuCategoryList=()=>{

    const menuItemList=menucategory.map(category=><MenuCategoryItem menuitem={category} menucatid={category.id}/>)
    return(
        <>
              {menuItemList}
        </>
          
        
    );
}

export default MenuCategoryList;

