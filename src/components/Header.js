import React from "react";
import { useState } from "react";
import './Header.css';
import NavMenu from './NavMenu'
import LocationPopup from "./LocationPopup";

export default function Header() {

    const [isMenu, setisMenu] = useState(false);

    const hideShow = () => {
        if (isMenu) {
            setisMenu(false);

        } else {
            setisMenu(true);
        }
    }

    
    
    
    return (
        <div className="main-header">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="logo" id="navbarTogglerDemo01">
                        <img src=" /weblogo/logo2.png" alt="" />


                    </div>
                    <div className="cart">

                        <input id="search" className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
                        <span className="scart"><i class="fa-solid fa-cart-shopping"></i></span>
                        <span data-toggle="modal" data-target="#exampleModalCenter" id="locate"><i class="fa-solid fa-location-dot"></i></span>
                        <span className="user"><i class="fa-regular fa-user"></i></span>
                        <span onClick={hideShow}><i class="fa-solid fa-bars"></i></span>
                    </div>
                    {isMenu && <div className="menu">

                        <NavMenu />
                  
                    </div> }
                   
                     <div className=" modal fade " id="exampleModalCenter" tabIndex="-1"
                     role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
 
                        <LocationPopup />
                        </div>



                </div>
            </nav>
        </div>
    );
}
