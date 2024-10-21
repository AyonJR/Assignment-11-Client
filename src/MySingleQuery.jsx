import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MySingleQuery = ({ mySingleQuery, handleDelete }) => {
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
    userEmail,
    userName,
    userPhoto,
    currentDateAndTime,
    recommendation,
  } = mySingleQuery;

  return (
    <div
      data-aos="fade-up"
      className="relative bg-white rounded-lg overflow-hidden transition-shadow duration-300 transform hover:scale-105 shadow-lg"
    >
      {/* Image */}
      <div className="bg-white h-48 rounded-t-lg">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-t-lg transform hover:scale-95 transition-transform duration-300"
        />
      </div>

      {/* Overlay with Buttons */}
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 bg-white rounded-lg shadow-lg ">
          <h3 className="py-2 font-bold text-center text-gray-800 uppercase dark:text-black">
            {productName}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 ">
            <Link to={`/updateQuery/${_id}`}>
              <button className="px-4 py-2 text-xs font-semibold text-black uppercase transition-colors duration-300 transform dark:hover:bg-black hover:text-white  focus:outline-none animate__fadeInLeft">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 text-xs font-semibold text-black uppercase transition-colors duration-300 transform dark:hover:bg-black hover:text-white  focus:outline-none animate__fadeInLeft"
            >
              Delete
            </button>
          </div>

          <div className="flex justify-center mt-2">
            <Link to={`/queryDetails/${_id}`}>
              <button className="px-4 py-2 w-full text-xs font-semibold bg-black text-white uppercase transition-colors duration-300 transform rounded  focus:outline-none animate__fadeInRight">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleQuery;
