const FoodItemListField = ({search,onSearch}) =>{
    return(
        <div className="HotelFoodItemInput">
            <i className="fa fa-search"></i>
            <input type="text"
                   value={search} onChange={onSearch}></input>
        </div>
    )
}

export default FoodItemListField;