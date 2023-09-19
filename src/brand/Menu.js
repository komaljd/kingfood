import Footer from "../footer/Footer";
import MenuList from "./menu/MenuList";

const Menu = () =>{

    return(
        <>
        <div className="Hotel-container section">
            <div className="row">
               <MenuList/>
            </div>
        </div>
             <Footer/>
        </>
    )
}

export default Menu;