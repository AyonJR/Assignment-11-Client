
const SingleQuery = ({ query }) => {

    const { productName,
        productBrand,
        imageUrl,
        queryTitle,
        boycottingReason,
        userEmail,
        userName,
        userPhoto,
        currentDateAndTime,
        recommendation } = query;


    return (
        <div>
            <div className="w-[420px]  overflow-hidden bg-white rounded-lg shadow-lg ">
                <div className="px-4 py-2 flex justify-between">
                    <h1 className="text-xl font-bold text-gray-800 uppercase ">{productName}</h1>
                    <div className="avatar mt-2 indicator mr-7">
                        <span className="indicator-item bg-cyan-700 border-cyan-700 font-semibold badge mr-6 badge-secondary">{userName}</span>
                        <div className="w-12 h-12 rounded-lg">
                            <img alt="Tailwind CSS examples" src={userPhoto} />
                        </div>
                    </div>

                </div>
                <div className="px-4 py-2 mt-5">
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                </div>

                <img className="object-center w-full h-48 mt-2" src={imageUrl} alt="NIKE AIR" />

                <div className="flex items-center justify-between px-4 py-2 bg-cyan-800">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Recommend</button>
                </div>
            </div>
        </div>
    );
};

export default SingleQuery;