import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleQuery = ({ query }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    _id,
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
    <div
      data-aos="fade-up"
      className="bg-white rounded-lg overflow-hidden transition-shadow duration-300 transform hover:scale-105 relative shadow-lg"
    >
      {/* Image */}
      <div className="bg-white h-48 rounded-t-lg">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-t-lg transform hover:scale-95 transition-transform duration-300"
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg font-bold text-gray-700">{productName}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm bg-black text-white font-semibold px-2 py-1 rounded-lg">
              {userName}
            </span>
            <img
              src={userPhoto}
              alt={userName}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <p className="uppercase text-xs font-bold text-gray-600 mb-1">
          {productBrand}
        </p>

        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          {queryTitle}
        </h2>
        
        <p className="text-xs text-gray-600 mb-4">{boycottingReason}</p>

        {/* Date and Button */}
        <div className="flex justify-between items-center bg-black text-white p-2 rounded-lg">
          <h1 className="text-xs">{currentDateAndTime}</h1>
          <Link to={`/queryDetails/${_id}`}>
            <button className="px-3 py-1 text-xs font-semibold bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition">
              Recommend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleQuery;
