import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MySingleQuery from "./MySingleQuery";
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";


const MyQueries = () => { 

    const { user } = useContext(AuthContext)
    const [query , setQuery] = useState([])
   
 
     useEffect(()=> {
          
         
     } , [user])
     const getData = async ()=> {
            const { data } = await axios( 
                `http://localhost:5000/queries/${user?.email}`, {withCredentials:true}
            )
            setQuery(data)
        }
        getData()


//delete
const handleDelete = async id => {
   
    
    const {data} = await axios.delete(`http://localhost:5000/query/${id}`)
    console.log(data)
    if(data.deletedCount >1){

        alert("deleted succesfully")
        getData()
    }




}



 return (
        <div>
       <div
      className="bg-cover  bg-center h-[80vh] relative overflow-hidden rounded-lg shadow-lg"
      style={{ backgroundImage: `url(https://i.ibb.co/fMRv3SB/cover-and-banner-of-working-desk-with-gadget-top-view-of-table-working-and-free-space-for-text-with.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 text-white">
        <div className="flex justify-center mt-[30vh]">
        <h1 className="text-2xl font-semibold text-white mb-6 animate-pulse">Find your best solution....</h1>
        </div>
        <div className="flex justify-center ">
        <Link to={'/addQueries'}>
        <button className="bg-gray-800 text-white px-8 py-4 rounded-full flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
          <FaPlus className="mr-2 text-2xl animate-bounce" /> Add Queries
        </button>
        </Link>
        </div>
      </div>
    </div>
            <div className="mt-14 flex justify-center">
              <h2 className="text-3xl font-semibold animate-pulse">My Queries</h2>
            </div>
            <div className="grid mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                  query.map(mySingleQuery => <MySingleQuery key={mySingleQuery._id} mySingleQuery={mySingleQuery} handleDelete={handleDelete}></MySingleQuery>)
                }
            </div>
        </div>
    );
};

export default MyQueries;