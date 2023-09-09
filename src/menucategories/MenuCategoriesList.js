export default function MenuCategoriesList({menucategoryname,menucategoryimages}){
    return(
        <>
            <div className="col-md-3 menuCategoryItem d-flex align-items-center justify-content-center">
                <div>{menucategoryname.name}</div>
                
                {/* <div>{menucategoryimages.images}</div> */}
                
            </div>
        </>
    )
}