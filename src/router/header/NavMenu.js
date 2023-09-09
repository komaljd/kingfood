
//sidebar menu
import React from "react"
import { Link } from "react-router-dom";

const Menu = () => { 
    return(

   <div>
    <ul>
    <li> <Link to="/"> Home </Link></li>
    <li>Menu</li>
    <li>About Us</li>
    <li>Contact</li>
    </ul>
   </div>
    );
   
}
export default Menu; 