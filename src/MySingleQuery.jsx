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
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 object-center bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${imageUrl})`}}></div>
    
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{productName}</h3>
    
            <div className="flex items-center justify-between px-3 py-2 bg-cyan-800 dark:bg-cyan-800">
          <Link to={`/updateQuery/${_id}`}>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Update</button>
          </Link>
                <button onClick={()=> handleDelete(_id)} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Delete</button>
            </div>
            <div className="flex  justify-center">
            <Link to={`/queryDetails/${_id}`}>
          <button className="px-2 w-full bg-cyan-800 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform  rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Details</button>
          </Link>
            </div>
        </div>
    </div>
    
    );
};

export default MySingleQuery;