
import './menu.css';
import { useParams } from "react-router-dom";

import InnerPageBanner from "../component/InnerPageBanner";
import hotels from '../hotelsData/HotelsData';
import MenuCategory from './MenuCategory';
import MenuItemList from './MenuItemList';
import ParentMenu from './ParentMenu';

const MenuDetail = () =>{
    const {menudetailid} = useParams();
    const holte_data = hotels.find(hotel=> hotel.id == menudetailid);
    return(
        <>
        { holte_data &&
        <InnerPageBanner bannername={holte_data.hotelname}/>
        }
        <div className="OnlineOrder section">
            <div className="row">
                <div className="col-md-12">
                   <hr/>
                   <h3 className="text-start mb-2"> Online Order </h3>
                   <hr/>                       
                </div>
                <div className="col-md-12">
                    {/* component For List Down Item from Each Hotel */}
                    <ParentMenu menuid={holte_data.id}/>
                </div>
            </div>
        </div>     
        </>
    );
}

export default MenuDetail;