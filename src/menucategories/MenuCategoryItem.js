
import {Link} from 'react-router-dom';
import MneuCategoryInner from './MenuCategoryInner';
const MenuCategoryItem=({menuitem,menucatid})=>{

    return(

        <div className="col-md-2 menuCategoryItem d-flex align-items-center justify-content-center mt-5 mb-5">
            {/* <p>{menuitem.name}</p> */}
              <div className="menucategoryimg">
              {/* <Link to="/menucategorydetail" element=<MneuCategoryInner/>> */}
              <Link key={menuitem.id}  to={""+menucatid}  element=<MneuCategoryInner/>>
              {/* icon */}
                <img classname="imgSize" src={menuitem.image} alt={menuitem.name} />
              </Link>
              </div>
        </div>
        
    );
}

export default MenuCategoryItem;

