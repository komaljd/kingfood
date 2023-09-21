import { Link, useParams } from "react-router-dom";
import hotels from "../../hotelsData/HotelsData";
const MenuList = () =>{
    const {locationid} = useParams();

    let hotelsData="";
    if(locationid != null){ 
        let filterLocationId = hotels.filter((Lid)=>Lid.locationId == locationid)
        
        hotelsData = filterLocationId.map((lhid)=> <div key={lhid.id}  className="col-md-4">
            <Link to={"/menuDetail/"+lhid.id}> <img src={lhid.image} alt={lhid.imagealt} className="imgSize"/>
            <h5 className="mt-3">{lhid.hotelname}</h5></Link>
            </div>
        ) 
    }else{
        hotelsData = hotels.map((hotelid)=> <div key={hotelid.id}  className="col-md-4">
        <Link to={"/menuDetail/"+hotelid.id}> <img src={hotelid.image} alt={hotelid.imagealt} className="imgSize"/>
         <h5 className="mt-3">{hotelid.hotelname}</h5></Link>
         </div>);
    }

    return( <>
        {hotelsData}
    </> );
}

export default MenuList;