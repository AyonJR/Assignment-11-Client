import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext) // Get logoutUser function from context

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to="/"><a className="font-normal p-2 text-purple-700 rounded-lg">Home</a></NavLink></li>
                        
                        <li>
                        <NavLink to="/allTouristSpot"><a className="font-bold p-2 text-purple-700 rounded-lg">All Tourists Spot</a></NavLink>
                    </li>
                    <li><NavLink to="/addTouristSpot"><a className="font-bold p-2 text-purple-700 rounded-lg">Add Tourist Spot</a></NavLink></li>
                        
                    <li><NavLink to="/myListPage"><a className="font-bold p-2 rounded-lg text-purple-700">My List</a></NavLink></li>
                    {/* <li>
                    <div className="mr-2 ">
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} value="synthwave" className="toggle  switch theme-controller"/>
          </div>
                    </li> */}
                   <li>
                    <div className="mr-2 ">
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} value="synthwave" className="toggle  switch theme-controller "/>
          </div>
                   </li>
                    <li>
                    {user ? (
                    <>
                        {/* User photo and logout button */}
                        <div className="relative">
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 mr-4 rounded-full cursor-pointer" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">{user.displayName}</span>
                        </div>
                        <button onClick={logoutUser} className="btn">Logout</button> 
                    </>
                ) : (
                    <>
                        <NavLink to="/login"><a className="btn font-bold mr-2 text-purple-700">Login</a></NavLink>
                        <NavLink to="/register"><a className="btn font-bold text-purple-700">Register</a></NavLink>
                    </>
                )}
                    </li>
                    
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">TechQuery</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/"><a className=" p-2 hover:border-cyan-700 hover:border-b-4  rounded-lg">Home</a></NavLink></li>
                    <li>
                        <NavLink to="/Queries"><a className="hover:border-cyan-700 hover:border-b-4 p-2 rounded-lg">Queries</a></NavLink>
                    </li>
                    <li><NavLink to="/addQueries"><a className="hover:border-cyan-700 hover:border-b-4 p-2 rounded-lg">Recommendations for me</a></NavLink></li>
                    <li><NavLink to="/myQueries"><a className="hover:border-cyan-700 hover:border-b-4 p-2 rounded-lg">My Queries</a></NavLink></li>
                    <li><NavLink to="/myListPage"><a className="hover:border-cyan-700 hover:border-b-4 p-2 rounded-lg">My Recommendations</a></NavLink></li>
                </ul>
            </div>
            <div className="navbar-end"> 
            <div className="mr-2 ">
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} value="synthwave" className="toggle  switch theme-controller hidden sm:inline-block"/>
          </div>
          {user ? (
    <>
        {/* User photo and logout button */}
        <div className="relative ">
            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 mr-4 rounded-full cursor-pointer" />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">{user.displayName}</span>
        </div>
        <button onClick={logoutUser} className="btn hidden sm:inline-block">Logout</button> 
    </>
) : (
    <div className="hidden sm:inline-block"> {/* Wrap the login and register buttons in a div with a conditional class */}
        <NavLink to="/login"><a className="btn bg-cyan-700  font-bold mr-2 text-white hover:bg-cyan-700 hover:border-cyan-700">Login</a></NavLink>
        <NavLink to="/register"><a className="btn bg-cyan-700  font-bold mr-2 text-white hover:bg-cyan-700 hover:border-cyan-700">Register</a></NavLink>
    </div>
)}


            </div>
        </div>
    );
}; 

export default Navbar;
