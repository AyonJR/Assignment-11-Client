import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdateMyQuery = () => {
   const queryDetails = useLoaderData() ;
   console.log(queryDetails)

   const { _id,productName,
    productBrand,
    imageUrl,
    queryTitle,
    boycottingReason,
    userEmail,
    userName,
    userPhoto,
    currentDateAndTime,
    recommendation } = queryDetails;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const imageUrl = form.imageUrl.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReason = form.boycottingReason.value;
    
        form.reset();
    
        const updatedProductsInfo = {
            productName: productName,
            productBrand: productBrand,
            imageUrl: imageUrl,
            queryTitle: queryTitle,
            boycottingReason: boycottingReason,
            userEmail: userEmail,
            userName: userName,
            userPhoto: userPhoto,
            currentDateAndTime: currentDateAndTime,
            recommendation: recommendation
        };
    
        fetch(`https://assignment-11-pi.vercel.app/queries/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProductsInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Your item has been updated successfully.',
            });
        })
        .catch(error => {
            console.error('Error updating item:', error);
            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later!',
            });
        });
    };


    return (
        <div>
              <div className="flex justify-center mt-6"> 
                <h2 className="font-semibold text-2xl">Update Query</h2>
              </div>

             <div className="max-w-lg mt-4 mx-auto">
            <form onSubmit={handleUpdate} className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                        defaultValue={productName}
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
                        defaultValue={productBrand}

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
                        defaultValue={imageUrl}
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
                        defaultValue={queryTitle}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="boycottingReason">
                        Boycotting Reason Details
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="boycottingReason"
                        name="boycottingReason"
                        
                        placeholder="Enter boycotting reason details"
                        defaultValue={boycottingReason}
                    />
                </div>
                <div className="flex justify-center w-full">
                    <button
                        className="bg-gray-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Query
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateMyQuery;