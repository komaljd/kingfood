
import './menudetail/menu.css';
import { useParams } from "react-router-dom";
import InnerPageBanner from "../component/InnerPageBanner";
import hotels from '../hotelsData/HotelsData';
import ParentMenu from './menudetail/ParentMenu';
import FilterableFoodList from './menudetail/FilterableFoodList';

const MenuDetail = () =>{
    const {menudetailid} = useParams();
    const holte_data = hotels.find(hotel=> hotel.id == menudetailid);
   
  
    return(
        <>
        { holte_data &&
        <InnerPageBanner bannername={holte_data.hotelname}/>
        }
        <div className="OnlineOrder section">
            <FilterableFoodList menuid={holte_data.id}/>
            <div className="row">
                <div className="col-md-12 p-0">
                   <h3 className="text-start mb-2"> Online Order </h3>                      
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