import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const MyQueryDetails = () => {
     
    const { user } = useContext(AuthContext)

    console.log(user)

    const loggedInUserName = user?.displayName ;
    const loggedInUserEmail = user?.email ;
    const loggedInUserDate = new Date().toLocaleString();

    const query = useLoaderData();
    const {  _id ,
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

    const queryId = _id 

   console.log('query', queryId)
 //form 

  const handleSubmit = event => { 
  
    event.preventDefault();
   


    console.log(user)

    const form = event.target ;
    
    const name = form.name.value
    const title = form.title.value
    const image = form.image.value
    const reason = form.reason.value

    const recommend = { queryId , queryTitle , productName , userName , userEmail , currentDateAndTime , loggedInUserName , loggedInUserEmail , loggedInUserDate , name , title , image , reason , recommendation }

    console.log(recommend)

    //send data to the server

    fetch('http://localhost:5000/recommendations' , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recommend)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

   form.reset()

  }







    return (
        <div className="">
            <div className="flex justify-center">
            <div className="w-[672px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-center w-full h-64" src={imageUrl} alt="Product" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-orange-600 uppercase dark:text-orange-600">{productBrand}</span>
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

    {/* form recommendation */}
    <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <div className="flex justify-center">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-orange-600">Recommendations</h2>
            </div>

            <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Title</label>
                        <input id="username" name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-600 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Product Name</label>
                        <input id="emailAddress" name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-600 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Product Image</label>
                        <input id="password" name="image" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-600 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Reason</label>
                        <input id="passwordConfirmation" name="reason" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-600 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 text-orange-600 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-orange-600">Add Recommendations</button>
                </div>
            </form>
        </section>


        </div>
    );
};

export default MyQueryDetails;
