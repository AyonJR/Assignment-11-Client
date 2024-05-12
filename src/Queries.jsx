import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuery from "./SingleQuery";

const Queries = () => {
    const queries = useLoaderData();
    const [gridLayout, setGridLayout] = useState("lg");

    const toggleGridLayout = () => {
        setGridLayout(prevLayout => {
            if (prevLayout === "lg") return "md";
            if (prevLayout === "md") return "sm";
            return "lg";
        });
    };

    return (
        <div>
            <div className="mt-5 flex justify-center">
                <button onClick={toggleGridLayout} className="px-4 py-2 mr-2 text-white bg-gray-700 font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-110 shadow-md focus:outline-none">Toggle Grid Layout</button>
            </div>
            <div className={`mt-10 mx-5 grid lg:grid-cols-${gridLayout === "lg" ? "3" : gridLayout === "md" ? "2" : "1"} md:grid-cols-${gridLayout === "lg" ? "2" : "1"} grid-cols-1 gap-10`}>
                {queries.map(query => <SingleQuery key={query._id} query={query} />)}
            </div>
        </div>
    );
};

export default Queries;
