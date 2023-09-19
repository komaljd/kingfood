import { Link } from "react-router-dom";
import hotels from "../../hotelsData/HotelsData";
const MenuList = () =>{
    const hotelsData = hotels.map((hotelid)=> <div key={hotelid.id}  className="col-md-4">
                                               <Link to={"/menuDetail/"+hotelid.id}> <img src={hotelid.image} alt={hotelid.imagealt} className="imgSize"/>
                                                <h5 className="mt-3">{hotelid.hotelname}</h5></Link>
                                            </div>);

    return( <>{hotelsData}</> );
}

export default MenuList;