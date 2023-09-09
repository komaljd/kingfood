import { Link, useNavigate } from "react-router-dom";
import FoodItem from './BestSellerData';
const BestSeller = () =>{
    
    const navigate= useNavigate();

    const handleFoodClick=(food)=>{
        console.log(food);
        
    navigate("NextPage/"+ food.id)

    }
    return(
        <div className="section">
        <h3 className="text text-center">Best Seller</h3>
        <div className="box-1 d-flex">
        {FoodItem.map((food)=>{
            return(
                <div key={food.id} className="card-1  shadow-lg p-3 m-3 " style={{ width: '18rem' }}>
                <img src={food.images} className="card-img-top" alt="food_img" />
                <div className="card-body">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text">{food.description}</p>
                    <Link to="" onClick={()=>handleFoodClick(food)} className="btn btn-custom">{food.btnText}</Link>
                </div>
            </div>
            )
            })}
            
        </div>
    </div>
    )
}

export default BestSeller;