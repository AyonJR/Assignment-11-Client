import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div
            className="bg-white"
           
        >
            <div className="lg:mx-20">
                <Navbar />
            </div>
            <Outlet />
            <div className="mt-[40vh]">
                <Footer />
            </div>
        </div>
    );
};

export default Root;
