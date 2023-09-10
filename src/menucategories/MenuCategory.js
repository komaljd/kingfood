import './menuCategories.css';
import MenuCategoryList from "./MenuCategoryList";

const MenuCategory=()=>{

    return(
        <div className="section mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                <h3 className="text-center">Menu Category</h3>
                </div>
            </div>
            <div className="row">
                <MenuCategoryList/>
            </div>
        </div>
    )
}

export default MenuCategory;