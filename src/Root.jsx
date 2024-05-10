import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>Hello my name is ayon jr</h2>
            
        </div>
    );
};

export default Root;