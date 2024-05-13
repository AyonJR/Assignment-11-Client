import React from "react";
import { Link } from "react-router-dom";

const SingleQuery = ({ query }) => {
    const { _id ,
        productName,
        productBrand,
        imageUrl,
        queryTitle,
        boycottingReason,
        userName,
        userPhoto,
        currentDateAndTime,
    } = query;

    return (
        <div className="w-[400px] overflow-hidden bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-50 animate-pulse">
                <h1 className="text-lg font-bold">{productName}</h1>
                <div className="flex items-center space-x-2">
                    <span className="text-sm bg-gray-700 text-gray-50 font-semibold px-2 py-1 rounded-lg">{userName}</span>
                    <img src={userPhoto} alt={userName} className="w-10 h-10 rounded-full" />
                </div>
            </div>
            <div className="px-4 py-2">
                <p className="text-sm text-gray-600 animate-bounceIn">{productBrand}</p>
                <h2 className="text-xl font-bold text-gray-800 mt-2 animate-fadeIn">{queryTitle}</h2>
                <p className="text-gray-700 mt-2 ">{boycottingReason}</p>
            </div>
            <img src={imageUrl} alt={productName} className="w-full h-48 object-cover " />
            <div className="px-4 py-2 bg-gray-800 text-white flex justify-between items-center">
                <h1 className="text-lg font-bold animate-pulse">{currentDateAndTime}</h1>
                <Link to={`/queryDetails/${_id}`}>
                <button className="px-3 py-1 text-xs font-semibold bg-white text-gray-900 rounded-lg hover:bg-gray-200 focus:bg-gray-400 focus:outline-none animate-heartBeat">Recommend</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleQuery;
