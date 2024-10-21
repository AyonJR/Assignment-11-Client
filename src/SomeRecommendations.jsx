import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const SomeRecommendations = () => {
  return (
    <div>
      <div className="flex justify-center custom-font ">
        <h2 className="text-4xl text-black  font-semibold animate__animated animate__bounce">
          Explore the world of Best Suggestions
        </h2>
      </div>
      <div className="flex justify-center mt-4">
        <Link to={'/recommendationsForMe'}>
        
        <button className="flex items-center gap-3 bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          <span className="relative w-6 h-6 bg-white text-black rounded-full grid place-items-center overflow-hidden">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute transform translate-x-[-150%] translate-y-[150%] transition-transform duration-300 ease-in-out hover:translate-x-[150%] hover:translate-y-[-150%]"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute transition-transform duration-300 ease-in-out delay-100"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Explore All
        </button>
        
        </Link>
      </div>

      {/* advertise card */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <img
              className="w-[350px] h-[350px] rounded-[30px] object-cover"
              src="https://i.ibb.co.com/YhNbygw/maxresdefault-3.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Apple</h2>
          </div>
          <h2 className="w-[350px] mx-2  text-lg custom-font font-medium">
            Apple Inc. is a leading tech company known for products like the
            iPhone, Mac, and innovative software.
          </h2>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-4 items-center">
          <div>
            <img
              className="w-[350px] h-[350px] object-cover rounded-[30px]"
              src="https://i.ibb.co.com/MpRpxF7/images-48.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Samsung</h2>
          </div>
          <h2 className="w-[350px] text-lg custom-font font-medium">
            Samsung is a global leader in electronics, known for its
            smartphones, TVs, and cutting-edge technology.
          </h2>
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-4 items-center">
          <div>
            <img
              className="w-[350px] h-[350px] object-cover rounded-[30px]"
              src="https://i.ibb.co.com/wW25pY7/Q2-Quarterly-Website-Banners-Mobile-FA-Flip-6-Lifestyle.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">JBL</h2>
          </div>
          <h2 className="w-[350px] text-lg custom-font font-medium">
            JBL is renowned for producing high-quality audio equipment,
            including speakers, headphones, and sound systems.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SomeRecommendations;
