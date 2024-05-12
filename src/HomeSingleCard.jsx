import { useState } from 'react';

const HomeSingleCard = ({ card }) => {
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
        <div
            className="rounded-lg w-[400px] ml-4 overflow-hidden shadow-lg bg-white relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <img
                src={imageUrl}
                alt={productName}
                className="w-full h-48 object-center"
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
                <h3 className="font-semibold mb-2">Boycotting Reason:</h3>
                <p className="text-gray-700">{boycottingReason}</p>

                {/* Recommendation */}
                <h3 className="font-semibold mb-2">Recommendation:</h3>
                <p className="text-gray-700">{recommendation}</p>

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
            {isHovered && (
                <div className="absolute inset-0 bg-black opacity-50 transition duration-300"></div>
            )}

           
        </div>
    );
};

export default HomeSingleCard;
