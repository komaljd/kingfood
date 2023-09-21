import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "../component/Home";
import Login from "../component/Login";
import Cart from "../component/Cart";
import MenuDetail from "../brand/MenuDetail";
import MneuCategoryInner from "../menucategories/MenuCategoryInner";
import Menu from "../brand/Menu";
import PageNotFound from "../component/PageNotFound";
import Footer from "../footer/Footer";
import Checkout from "../checkout/Checkout";

const RouterMain = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    {/* <Route path="" element={<MneuCategoryInner/>} >
                        <Route path=":menucatname" element={<MneuCategoryInner/>} />
                    </Route> */}
                    {/* <Route path="/MenuDetail" element={<MenuDetail/>} >
                        <Route path=":menudetailid" element={<MenuDetail/>}/>
                    </Route> */}
                    <Route path="/menuDetail/:menudetailid" element={<MenuDetail/>}/>
                    <Route path="/MenuCategoryInner/:menucatname" element={<MneuCategoryInner/>} />
                    <Route path="/menu" element={<Menu/>}>
                    <Route path="/menu/:locationid" element={<Menu/>}/>
                    </Route>    
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path='*' element={<PageNotFound/>}/>  
                </Route>
            </Routes>
           <Footer/>
        </BrowserRouter>
    )
}

export default RouterMain;