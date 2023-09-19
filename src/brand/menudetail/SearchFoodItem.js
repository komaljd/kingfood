export function SearchFoodItem(fooditems,searchQuery){
   return fooditems.filter((item)=>(
    item.food_items.some((food)=>
        {
            const foodName = food.name || ''; // Ensuring food items name is string or an empty string
            const query = searchQuery || '';
            return foodName.toLowerCase().includes(query.toLowerCase())
        }
    )
   ));
}
