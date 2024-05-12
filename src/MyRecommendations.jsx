import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`http://localhost:5000/recommendations/${user?.email}`);
                setRecommendations(data);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };
        getData();
    }, [user]);

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;
