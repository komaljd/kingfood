
import menucategoryinner from "./MenuCategoryInnerData";
import MenuCategoryInnerItem from "./MenuCategoryInnerItem";

const MenuCategoryInnerList=({menucatiddata})=>{

    const menuItemList=menucategoryinner.map(category=><MenuCategoryInnerItem menuinneritem={category}/>)
    // const itemname=menucategory.find(foodname=>foodname.id==menuitem);
    return(
        <di>
              {menuItemList}
              {menucatiddata.id}
              
        </di>
          
        
    );
}

export default MenuCategoryInnerList;

