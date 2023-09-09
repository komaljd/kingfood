
import categories from "./MenuCategoriesData";
import MenuCategoriesList from "./MenuCategoriesList";
import './menuCategories.css';
export default function MenuCategories(){
    const menuCategoriesItem = categories.map(categoryname=><MenuCategoriesList menucategoryname={categoryname}/>);
    // const menuCategoriesImage=categories.map(imgurl=><MenuCategoriesList menucategoryimages={imgurl}/>);

    return(
        <>
            <div>
                <div className="menuCategory section">
                    {/* menu category */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Menu Categories</h3>
                        </div>
                    </div>
                    
                    <div className="row">  
                        {menuCategoriesItem}
                        {/* {menuCategoriesImage} */}
                        {/* <div>
                            {categories.map((image) => <img key={image.imagesrc} src={image.imagesrc} />)}  
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )

}   