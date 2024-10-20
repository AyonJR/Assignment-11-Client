import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';

const AddQueries = () => {
   

    const {user} = useContext(AuthContext)
    console.log(user)
    const userEmail = user.email ;
    const userName = user.displayName ; 
    const userPhoto = user.photoURL ;  
    const currentDateAndTime = new Date().toLocaleString(); // Get the current date and time in a readable format


    const userInfo = { userEmail , userName , userPhoto , currentDateAndTime , }
    console.log(userInfo)
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const imageUrl = form.imageUrl.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReason = form.boycottingReason.value;
    
        form.reset();
    
        const productsInfo = {
            productName: productName,
            productBrand: productBrand,
            imageUrl: imageUrl,
            queryTitle: queryTitle,
            boycottingReason: boycottingReason,
            userEmail: userEmail,
            userName: userName,
            userPhoto: userPhoto,
            currentDateAndTime: currentDateAndTime,
            recommendation: 0
        };
    
        try {
            const response = await fetch('https://assignment-11-pi.vercel.app/queries', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productsInfo)
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit query');
            }
    
            const data = await response.json();
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your query has been submitted successfully!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later!',
                });
            }
        } catch (error) {
            console.error("Error submitting query:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later!',
            });
        }
    };

    return (
        <div className="max-w-lg mt-8 mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 
                        
                        
                        
                        leading-tight focus:outline-none focus:shadow-outline"
                        id="productName"
                        type="text"
                        name="productName"
                        placeholder="Enter product name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productBrand">
                        Product Brand
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productBrand"
                        type="text"
                        name="productBrand"
                        placeholder="Enter product brand"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                        Product Image URL
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        placeholder="Enter product image URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="queryTitle">
                        Query Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="queryTitle"
                        type="text"
                        name="queryTitle"
                        placeholder="Enter query title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="boycottingReason">
                        Boycotting Reason Details
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-orange-600 leading-tight focus:outline-none focus:shadow-outline"
                        id="boycottingReason"
                        name="boycottingReason"
                        
                        placeholder="Enter boycotting reason details"
                    />
                </div>
                <div className="flex justify-center w-full">
                    <button
                        className="bg-gray-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Query
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddQueries;
