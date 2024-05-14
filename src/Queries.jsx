import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuery from "./SingleQuery";

const Queries = () => {
    const allQueries = useLoaderData();
    const [gridLayout, setGridLayout] = useState("lg");
    const [searchText, setSearchText] = useState("");

    const toggleGridLayout = (layout) => {
        setGridLayout(layout);
    };

    // Function to filter queries based on search text
    const filteredQueries = allQueries.filter(query =>
        query.productName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div className="mt-5 flex justify-center">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search by product name"
                    className="px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
                <button onClick={() => toggleGridLayout("lg")} className={`px-4 py-2 text-white bg-gray-700 font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-110 shadow-md focus:outline-none ${gridLayout === 'lg' && 'bg-orange-600'}`}>Grid 3</button>
                <button onClick={() => toggleGridLayout("sm")} className={`px-4 py-2 text-white bg-gray-700 font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-110 shadow-md focus:outline-none ${gridLayout === 'sm' && 'bg-orange-600'}`}>Grid 1</button>
            </div>
            <div className={`mt-10 mx-5 grid lg:grid-cols-${gridLayout === "lg" ? "3" : gridLayout === "md" ? "2" : "1"} md:grid-cols-${gridLayout === "lg" ? "2" : "1"} grid-cols-1 gap-10`}>
                {filteredQueries.map(query => <SingleQuery key={query._id} query={query} />)}
            </div>
        </div>
    );
};

export default Queries;
