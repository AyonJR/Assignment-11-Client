import { useLoaderData } from "react-router-dom";

const MyQueryDetails = () => {
    const query = useLoaderData();
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
    } = query;

    return (
        <div className="flex justify-center">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-center w-full h-64" src={imageUrl} alt="Product" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{productBrand}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">{productName}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{queryTitle}</p>
                        <div className="flex justify-between">
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">issue : {boycottingReason}</p>
                        <p className="mt-2 mr-3 text-sm text-gray-600 dark:text-gray-400">recommendation : {recommendation}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={userPhoto} alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{userName}</a><br />
                                <p className="text-gray-600 dark:text-gray-400">{userEmail}</p>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{currentDateAndTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyQueryDetails;
