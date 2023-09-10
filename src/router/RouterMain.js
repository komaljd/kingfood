import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Home from "../component/Home";
import Login from "../component/Login";
import Cart from "../component/Cart";
import MenuDetail from "../brand/MenuDetail";

const RouterMain = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path=":menudetailid" element={<MenuDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterMain;