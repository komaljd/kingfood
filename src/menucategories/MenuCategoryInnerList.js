
// import menucategoryinner from "./MenuCategoryInnerData";
import MenuCategoryInnerItem from "./MenuCategoryInnerItem";

const MenuCategoryInnerList=({menucatiddata})=>{

    // const menuItemList=menucategoryinner.map(category=><MenuCategoryInnerItem menuinneritem={category}/>)
    // const itemname=menucategory.find(foodname=>foodname.id==menuitem);
    return(
        <>
              {/* {menuItemList}
              {menucatiddata.id} */}

        <h1>{menucatiddata}</h1>
        <div className="col-md-3 d-flex align-items-center justify-content-center ">
        {/* <p>{menuitem.name}</p> */}
            <div className="menucategoryinnerimg card mb-3">           
                <img classname="imgSize card-img-top" src={menucatiddata.image} alt={menucatiddata.name} />
                <div classname="card-body">
                <h5 classname="card-title">{menucatiddata.name}</h5>
                <p classname="card-title">{menucatiddata.price}</p>
                </div>
            </div>
         
        </div>
              
        </>
          
        
    );
}

export default MenuCategoryInnerList;

