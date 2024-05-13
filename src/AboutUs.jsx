
const AboutUs = () => {
    return (
        <div>
            <div className="bg-gray-100 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
            Learn more about our team and our mission.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 md:space-y-0">
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img className="w-full h-64 object-cover object-center" src="https://via.placeholder.com/400" alt="Team Member" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id feugiat ante.</p>
                </div>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img className="w-full h-64 object-cover object-center" src="https://via.placeholder.com/400" alt="Team Member" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id feugiat ante.</p>
                </div>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img className="w-full h-64 object-cover object-center" src="https://via.placeholder.com/400" alt="Team Member" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Johnson</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id feugiat ante.</p>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default AboutUs;