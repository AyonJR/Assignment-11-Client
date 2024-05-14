import { useEffect, useState } from "react";
import { FaDatabase, FaLightbulb } from 'react-icons/fa';
import { IoIosPaperPlane } from 'react-icons/io';
import { Link } from "react-router-dom";
import { FaBookOpen } from 'react-icons/fa';



const StatisticsSection = () => {
    const [totalQueries, setTotalQueries] = useState(0);
    const [totalSolutions, setTotalSolutions] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    // Hardcoded stats for demonstration
    useEffect(() => {
        // Simulating API calls to fetch data (replace with actual API calls)
        setTimeout(() => {
            setTotalQueries(512);
            setTotalSolutions(234);
            setTotalUsers(1678);
        }, 1000); // Delay for simulating API response
    }, []);
    return (
        <div className="bg-cover bg-center bg-no-repeat mx-3 py-16" style={{ backgroundImage: 'url(https://i.ibb.co/rGn5JtR/cover-and-banner-of-working-desk-with-gadget-top-view-of-table-working-and-free-space-for-text-with.jpg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-3xl">
                Explore Our Platform
            </h2>
            <p className="mt-4 text-lg leading-6 text-white">
                Discover the power of our platform through these stats.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Cards go here */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
    <div className="flex items-center justify-center h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4">
        <FaDatabase className="text-gray-800 text-3xl" />
    </div>
    <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Total Queries
        </h3>
        <p className="text-gray-700 text-xl font-semibold">
            {totalQueries}
        </p>
    </div>
</div>
<div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
    <div className="flex items-center justify-center h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4">
        <FaLightbulb className="text-gray-800 text-3xl" />
    </div>
    <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Total Solutions
        </h3>
        <p className="text-gray-700 text-xl font-semibold">
            {totalSolutions}
        </p>
    </div>
</div>
<div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
    <div className="flex items-center justify-center h-16 w-16 bg-gray-200  rounded-full mx-auto mb-4">
        <FaBookOpen className="text-gray-800 text-3xl" />
    </div>
    <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Total Users
        </h3>
        <p className="text-gray-700 text-xl font-semibold">
            {totalUsers}
        </p>
    </div>
</div>

                
            </div>
            <div className="mt-8">
                <Link to="/Queries" className="text-base font-medium text-white hover:text-gray-200">
                    All Queries <IoIosPaperPlane className="inline-block text-2xl align-middle animate-bounce" />
                </Link>
            </div>
        </div>
    </div>
    
    );
};

export default StatisticsSection;
