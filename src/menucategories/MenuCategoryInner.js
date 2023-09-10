import { useParams } from "react-router-dom";
import InnerPageBanner from "../component/InnerPageBanner";
import Footer from "../footer/Footer";
import MenuCategoryGallary from "./MenucategoryGallary";

const MneuCategoryInner=()=>{
    const {menucatid}=useParams();
    console.log(menucatid);
    // const itemname=menucategory.find(foodname=>foodname.id==menuitem);

    // return(
    //     <>
    //       <InnerPageBanner />
    //       <MenuCategoryGallary menucatid={menucatid}/>
    //       <Footer/>
    //     </>
    // );
}

export default MneuCategoryInner;