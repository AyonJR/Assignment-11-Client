import { useLoaderData } from "react-router-dom";
import SingleQuery from "./SingleQuery";

const Queries = () => {

 const queries = useLoaderData() ;

    console.log(queries)
    return (
        <div>
            {/* <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase ">NIKE AIR</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                </div>

                <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </div>
            </div> */}
           <div className="mt-10 mx-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
           {
            queries.map(query => <SingleQuery key={query._id} query={query}></SingleQuery>)

            }
           </div>
        </div>
    );
};

export default Queries;
