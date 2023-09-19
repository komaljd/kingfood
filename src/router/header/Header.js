import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Header.css';
import NavMenu from './NavMenu'

// import logo from '../images/logo.jpg'

export default function Header() {
    const [isMenu,setisMenu] = useState(false);

    const hideShow = ()=>{
        if(isMenu){
            setisMenu(false);

        }else{
            setisMenu(true);
        }
    }

    return (
        <div className="main-header container">

            <nav className="navbar navbar-expand-lg navbar-light -bg-black">
                <div className="container-fluid">
                    <div className="logo" id="navbarTogglerDemo01">
                        <Link className="navbar-brand text-white" to="/">King Food</Link>

                    </div>
                    <div className="cart">
                        <input id="search" className="form-control me-2" type="search"
                               placeholder="Search Here" aria-label="Search" />
                        <span>
                        <Link to="/cart" className="navbar-link cart-trolley--link">
                           {/* <FooditemCart className="cart-trolley"/> */}
                        <i className="fa-solid fa-cart-shopping cart-total--item"> 10</i>
                        </Link></span>
                        <span><i className="fa-solid fa-location-dot"></i></span>
                        <span><Link to="/login">  <i className="fa-regular fa-user"></i></Link></span>
                        <span>
                            <div onClick={hideShow} className="menu-burger">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </span>
                    </div>
                    {isMenu && <div className="menu">
                       <NavMenu/>
                   </div>
                   }
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}
// git status
// git add .
//git commit -m "commit msg"
//git push origin branch name
