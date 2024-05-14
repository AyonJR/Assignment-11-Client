import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MySingleQuery from "./MySingleQuery";
import { FaPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyQueries = () => { 
    const { user } = useContext(AuthContext);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        getData();
    }, [user]);

    const getData = async () => {
        try {
            const { data } = await axios(`https://assignment-11-pi.vercel.app/queries/${user?.email}`, { withCredentials: true });
            setQuery(data);
        } catch (error) {
            console.error("Error fetching queries:", error);
        }
    };

    const handleDelete = async id => {
        const confirmResult = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (confirmResult.isConfirmed) {
            try {
                const { data } = await axios.delete(`https://assignment-11-pi.vercel.app/query/${id}`);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'Your item has been deleted.',
                    });
                    getData();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to delete the item.',
                    });
                }
            } catch (error) {
                console.error('Error deleting item:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later!',
                });
            }
        }
    };

    return (
        <div>
             {query.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-xl font-semibold mb-4">No queries found.</p>
                    <Link to="/addQueries">
                        <button className="bg-gray-800 text-white px-8 py-4 rounded-full flex items-center text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                            <FaPlus className="mr-2 text-2xl animate-bounce" /> Add Query
                        </button>
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="bg-cover bg-center h-[80vh] relative overflow-hidden rounded-lg shadow-lg" style={{ backgroundImage: `url(https://i.ibb.co/fMRv3SB/cover-and-banner-of-working-desk-with-gadget-top-view-of-table-working-and-free-space-for-text-with.jpg)` }}>
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
                        {query.map(mySingleQuery => (
                            <MySingleQuery key={mySingleQuery._id} mySingleQuery={mySingleQuery} handleDelete={handleDelete} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyQueries;
