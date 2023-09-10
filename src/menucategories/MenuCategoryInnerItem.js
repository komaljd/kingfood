
const MenuCategoryInnerItem=({menuinneritem})=>{
    return(
        <div className="col-md-3 d-flex align-items-center justify-content-center ">
            {/* <p>{menuitem.name}</p> */}
              <div className="menucategoryinnerimg card mb-3">           
                <img classname="imgSize card-img-top" src={menuinneritem.image} alt={menuinneritem.name} />
                <div classname="card-body">
                <h5 classname="card-title">{menuinneritem.name}</h5>
                <p classname="card-title">{menuinneritem.price}</p>
            </div>
        </div>
             
        </div>

        
    )

}

export default MenuCategoryInnerItem;



