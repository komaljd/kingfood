
import './menu.css';
import { useParams } from "react-router-dom";

import InnerPageBanner from "../component/InnerPageBanner";
import hotels from '../hotelsData/HotelsData';
import MenuCategory from './MenuCategory';
import MenuItemList from './MenuItemList';

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
                <div className="col-md-4">
                    <ul className="OnlineOrder-Item color-white">
                          {/* component For List Down Item from Each Hotel */}
                          <MenuCategory menuid={holte_data.id}/>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="OnlineOrder-food-item">
                        <div className="OnlineOrder-food-filter">
                          <ul className="d-flex">
                            <p>List</p>
                          </ul>
                        </div>
                        <div className="OnlineOrder-food-list">
                          <MenuItemList menuid={holte_data.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </>
    );
}

export default MenuDetail;