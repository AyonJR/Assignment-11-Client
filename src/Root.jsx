import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div className=""> 
            <div className="lg:mx-8">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;