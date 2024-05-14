import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);


    useEffect(() => {
       
    }, [user]);
    const getData = async () => {
        try {
            const { data } = await axios(`https://assignment-11-pi.vercel.app/recommendations/${user?.email}`);
            setRecommendations(data);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };
    getData();

 //delete 

 const handleDelete = async id => {
   
    
    const {data} = await axios.delete(`https://assignment-11-pi.vercel.app/recommendations/${id}`)
    console.log(data)
    if(data.deletedCount >1){

        alert("deleted succesfully")
        getData()
    }




}


    return (
        <div>
           <div className="flex justify-center">
           <h2 className="text-2xl font-bold mb-4">My Recommendations ({recommendations.length})</h2>
           </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Query Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {recommendations.map((recommendation, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendation.productName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendation.queryTitle}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendation.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendation.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendation.reason}</td>
                                <td className="px-6 py-4 whitespace-nowrap"><button onClick={()=> handleDelete(recommendation._id)} className="p-2"><img className="h-5" src="https://i.ibb.co/4PmzXdn/delete.png" alt="" /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;
