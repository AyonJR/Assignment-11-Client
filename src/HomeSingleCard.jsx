import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSingleCard = ({ card }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    productName,
    productBrand,
    imageUrl,
    queryTitle,
    userName,
    userPhoto,
    currentDateAndTime,
  } = card;

  // Add state for animation
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      className=" bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="bg-white h-32 rounded-t-lg">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-t-lg transform hover:scale-95 transition-transform duration-300"
        />
      </div>

      {/* Card content */}
      <div className="p-4 custom-font">
        {/* Product brand */}
        <p className="uppercase text-xs font-bold text-black mb-1 cursor-pointer ">
          {productBrand}
        </p>

        {/* Product name */}
        <h2 className="font-semibold text-gray-700 text-sm mb-2 cursor-pointer hover:text-gray-900">
          {productName}
        </h2>

        {/* Query title */}
        <p className="text-xs text-gray-600 mb-4">{queryTitle}</p>

        {/* Author details */}
        <div className="flex items-center mt-2">
          <img
            src={userPhoto}
            alt={userName}
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-xs text-gray-500">
            By{" "}
            <span className="font-semibold hover:text-gray-700 cursor-pointer">
              {userName}
            </span>{" "}
            {currentDateAndTime}
          </p>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div
        className={`absolute inset-0 bg-black opacity-10 transition duration-300 ${
          isHovered ? "opacity-0" : ""
        }`}
      ></div>
    </div>
  );
};

export default HomeSingleCard;
