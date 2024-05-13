import axios from "axios";
import { Link } from "react-router-dom";

const MySingleQuery = ({mySingleQuery , handleDelete}) => { 

    const { _id , 
        productName,
        productBrand,
        imageUrl,
        queryTitle,
        boycottingReason,
        userEmail,
        userName,
        userPhoto,
        currentDateAndTime,
        recommendation } = mySingleQuery;






    return (
        


        //card
        <div className="relative overflow-hidden">
            <div className="w-full h-64 object-center bg-gray-300 bg-center bg-cover rounded-lg shadow-md animate__animated animate__fadeIn" style={{ backgroundImage: `url(${imageUrl})` }}></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 animate__animated animate__fadeInUp">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{productName}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-cyan-800 dark:bg-gray-800">
                        <Link to={`/updateQuery/${_id}`}>
                            <button className="px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none mr-2 animate__animated animate__fadeInLeft">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none mr-2 animate__animated animate__fadeIn">Delete</button>
                    </div>
                    <div className="flex justify-center mt-2 animate__animated animate__fadeIn">
                        <Link to={`/queryDetails/${_id}`}>
                            <button className="px-4 py-2 w-full bg-orange-600 text-xs font-semibold text-white uppercase transition-colors duration-300 transform rounded hover:bg-gray-700 dark:hover:bg-orange-700 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none animate__animated animate__fadeInRight">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default MySingleQuery;