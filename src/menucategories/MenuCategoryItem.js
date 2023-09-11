
import {Link} from 'react-router-dom';
import MneuCategoryInner from './MenuCategoryInner';
const MenuCategoryItem=({menuitem,menucatname})=>{
  
    return(

        <div className="col-md-2 menuCategoryItem d-flex align-items-center justify-content-center mt-5 mb-5">
              <div className="menucategoryimg">
              <Link to={"/MenuCategoryInner/"+menucatname} >
              {/* icon */}
                <img classname="imgSize" src={menuitem.image} alt={menuitem.name} />
              </Link>
              </div>
        </div>
        
    );
}

export default MenuCategoryItem;

