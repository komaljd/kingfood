import MenuCategoryInnerList from "./MenuCategoryInnerList";

const MenuCategoryGallary=({menucatid})=>{
    return(
        <div className="section mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                <h3 className="text-center">Menu Category</h3>
                </div>
            </div>
            <div className="row">
                {
                    <MenuCategoryInnerList menucatiddata={menucatid}/>
                }
            </div>
        </div>
    )
}

export default MenuCategoryGallary;

// menucatid={menucatid}