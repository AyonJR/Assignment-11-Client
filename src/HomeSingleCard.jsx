import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSingleCard = ({ card }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const {  
        productName,
        productBrand,
        imageUrl,
        queryTitle,
        boycottingReason,
        userEmail,
        userName,
        userPhoto,
        currentDateAndTime,
        recommendation
    } = card;

    // Add state for animation
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div data-aos = "flip-up"
            className="rounded-lg w-[400px] mt-3 ml-4 overflow-hidden shadow-lg  relative transform transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <img
                src={imageUrl}
                alt={productName}
                className="w-full h-48 object-cover"
            />

            {/* Card content */}
            <div className="p-6">
                {/* Product name */}
                <h2 className="text-xl font-semibold mb-2">{productName}</h2>

                {/* Product brand */}
                <p className="text-sm text-gray-600 mb-4">{productBrand}</p>

                {/* Query title */}
                <h3 className="font-semibold mb-2">Query Title:</h3>
                <p className="text-gray-700">{queryTitle}</p>

                {/* Boycotting reason */}
                <h3 className="font-semibold mt-2 mb-2">Boycotting Reason:</h3>
                <p className="text-gray-700">{boycottingReason}</p>

                

                {/* Additional details */}
                <div className="mt-4 flex items-center">
                    {/* User photo */}
                    <img
                        src={userPhoto}
                        alt={userName}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    {/* User name */}
                    <p className="text-sm text-gray-600">{userName}</p>
                    {/* Date and time */}
                    <p className="text-sm text-gray-600 ml-auto">{currentDateAndTime}</p>
                </div>
            </div>

            {/* Overlay for hover effect */}
            <div
                className={`absolute inset-0 bg-black opacity-10 transition duration-300 ${isHovered ? 'opacity-0' : ''}`}
            ></div>

            {/* Overlay content */}
            <div
                className={`absolute inset-0 p-6 text-white transition duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <h2 className="text-3xl font-semibold mb-4">{productName}</h2>
                <p className="text-sm">{queryTitle}</p>
            </div>
        </div>
    );
};

export default HomeSingleCard;
