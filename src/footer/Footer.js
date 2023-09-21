// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';


function Footer() {
    const navigate = useNavigate();

    return (
        <>
        <div className="footer">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <Link to="" onClick={()=>{
                            navigate("home")
                        }}> <span> King </span> Food
                        </Link>
                        <p>Rahul Colony, Taroda BK ,Nanded </p>
                        
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Menu Name</h5>
                        <ul>
                            <li className="menu-item"> 
                                <a className="item-link" href="/">Contact Us</a>
                            </li>
                            <li className="menu-item"> 
                                <a className="item-link" href="/">Menu</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Social Link</h5>
                        <div className="footer-icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                        <p><i className="fa-sharp fa-solid fa-phone-volume"></i> +919866475684</p>
                        <p><i className="fa-solid fa-envelope"></i> KingFood@gmail.com</p>
                    </div>
                </div>
        </div>
        </>
    );
}
export default Footer;