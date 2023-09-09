import BrandList from "./BrandList";
import hotels from "../hotels/HotelsData";
import './Brand.css';

const Menu = () =>{  // Parent Component Brand  
    // const brandsItems = hotels.map(hotelbrand=> hotelbrand.isBrand && <BrandList brandsdata={hotelbrand} brands="Brands"/>  )
    
    // Only 6 Item will Display on Home Page
    var brandsItems = hotels.slice(0,6).map(hotelbrand=> hotelbrand.isBrand &&
                                        <BrandList menuid={hotelbrand.id} brandsdata={hotelbrand} brands="Brands"/>);

    //Render all item in parent div
    return(
        <>
        <div className="section">
            <h3 className="text-center">Top Brands For You</h3>
            <div className="brand ">
                <div className="row">
                    {brandsItems}
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu;