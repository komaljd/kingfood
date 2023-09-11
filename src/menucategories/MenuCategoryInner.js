import { useParams } from "react-router-dom";
import InnerPageBanner from "../component/InnerPageBanner";
 import MenuCategoryGallary from "./MenucategoryGallary";
 import fooditems from "../hotelsData/FoodItemData";
 import Footer from "../footer/Footer";
import hotels from "../hotelsData/HotelsData";

const MneuCategoryInner=()=>{
    const {menucatname}=useParams();
    // const fooditem_data = fooditems.find(fooditemname=> fooditemname.food_category.name === menucatname);

    // const fooditem_data = fooditems.filter(fooditemname=>fooditemname.food_category.name === menucatname);
    // const fooditem_data = fooditems.filter(fooditemname=>(fooditemname.food_category.name === menucatname));

    const fooddata =fooditems.filter(fooditemdata =>
        (fooditemdata.food_category.some(item=>item.name===menucatname)
    ));

    //Found Hotel Name
    // const findHotelId = fooddata.map((item)=> (
    //     hotels.filter((hotelId) =>
    //     hotelId.id = item.hotel_id).map((hotelname)=> hotelname.hotelname
    //     )            
    //     )
    // )

    // const allHotelsId =  fooddata.map((item) =>  (hotels.filter((hotelId) => hotelId.id == item.hotel_id)));
    // var bannername=fooddata.slice(0,1).map(itemname=>(
    //     itemname.food_category.slice(0,1).map(
    //     (foodname=> foodname.name)
    // )));
    // console.log(bannername);
    
    // const fooddataitem=fooddata.map(itemname=>itemname.name);

    // <InnerPageBanner bannername={fooditem_data}/>
    // const fooditems =fooditem_data.map(flower => <foodname key={fooditems} name={foodname}/>);

    // const itemname=menucategory.find(foodname=>foodname.id==menuitem);

    return(
        <>
       
        {   
            fooddata.slice(0,1).map((item)=> (
                item.food_category.filter((category) => category.name === menucatname).map(
                    (category_name) => <InnerPageBanner key={category_name.id} bannername={category_name.name}/>
                )
            ))      
            
        }

        {
            fooddata.map((item)=> (
                <div key={item.id}>
                Hotel ID : {
                    hotels.filter((hotelId)=> hotelId.id==item.hotel_id)
                    .map((hotel_name) => hotel_name.hotelname)
                }
                <div>
                    {
                        item.food_category
                        .filter((category) => category.name === menucatname)
                        .map((category_detail) =>
                            <MenuCategoryGallary menucatid={category_detail.name}/>
                        )
                    }
                </div>
                </div>
             
            
             )
            
            )
        }
         
           
         
          {/* <MenuCategoryGallary menucatid="fd"/> */}
       
          <Footer/>  
        </>
    );
}

export default MneuCategoryInner;