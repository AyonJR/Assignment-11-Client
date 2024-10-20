import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { FaSignOutAlt } from "react-icons/fa"; 

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext); 

    return (
        <div className="navbar z-50 text-black custom-font bg-white"
             style={{ height: '2.5rem', padding: '0.25rem 0.5rem' }}> {/* Adjusted height and padding */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {user ? (
                            <ul className="menu menu-horizontal mr-2 px-1">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>Home</NavLink></li>
                                <li><NavLink to="/Queries" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>Queries</NavLink></li>
                                <li><NavLink to="/recommendationsForMe" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>Recommendations for me</NavLink></li>
                                <li><NavLink to="/myQueries" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>My Queries</NavLink></li>
                                <li><NavLink to="/myRecommendations" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>My Recommendations</NavLink></li>
                            </ul>
                        ) : (
                            <ul className="menu menu-horizontal mr-2 px-1">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>Home</NavLink></li>
                                <li><NavLink to="/Queries" className={({ isActive }) => isActive ? "border-b-2 border-black p-2" : "p-2"}>Queries</NavLink></li>
                            </ul>
                        )}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">TechQuery</h2> {/* Adjusted text size */}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {user ? (
               <ul className="menu text-sm font-medium menu-horizontal mr-2 px-1">
               <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-black mx-4 p-1" : "mx-4 p-1"}>Home</NavLink></li>
               <li><NavLink to="/Queries" className={({ isActive }) => isActive ? "border-b-2 border-black mx-4 p-1" : "mx-4 p-1"}>Queries</NavLink></li>
               <li><NavLink to="/recommendationsForMe" className={({ isActive }) => isActive ? "border-b-2 border-black mx-4 p-1" : "mx-4 p-1"}>Recommendations for me</NavLink></li>
               <li><NavLink to="/myQueries" className={({ isActive }) => isActive ? "border-b-2 border-black mx-4 p-1" : "mx-4 p-1"}>My Queries</NavLink></li>
               <li><NavLink to="/myRecommendations" className={({ isActive }) => isActive ? "border-b-2 border-black mx-4 p-1" : "mx-4 p-1"}>My Recommendations</NavLink></li>
           </ul>
           
                ) : (
                    <ul className="menu text-sm menu-horizontal mr-2 px-1">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-black p-1" : "p-1"}>Home</NavLink></li>
                        <li><NavLink to="/Queries" className={({ isActive }) => isActive ? "border-b-2 border-black p-1" : "p-1"}>Queries</NavLink></li>
                    </ul>
                )}
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="relative">
                            <img src={user.photoURL} alt={user.displayName} className="w-6 h-6 mr-4 rounded-full cursor-pointer" /> {/* Smaller image */}
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">{user.displayName}</span>
                        </div>
                        <button onClick={logoutUser} className="px-2 py-1 hidden sm:inline-block">
                            <FaSignOutAlt className="inline-block " /> {/* Icon with margin */}
                            Logout
                        </button>
                    </>
                ) : (
                    <div className="hidden sm:inline-block pr-16">
                        <NavLink to="/login"><a className="mr-2 text-white text-sm border-b-[2px] border-blue-600 hover:bg-gray-800 hover:border-gray-800">Login</a></NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
