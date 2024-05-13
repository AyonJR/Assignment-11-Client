import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className=""> 
            <div className="lg:mx-8">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="mt-[30vh]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;