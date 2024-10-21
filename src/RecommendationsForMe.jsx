import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const RecommendationsForMe = () => {


    const { user } = useContext(AuthContext);
    const [recommendationsForMe, setRecommendationsForMe] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`https://assignment-11-pi.vercel.app/recommendation/${user?.email}`);
                setRecommendationsForMe(data);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };
        getData();
    }, [user]);
 

console.log(recommendationsForMe)


    return (
        <div>
             <div>
           <div className="flex mt-12 justify-center">
           <h2 className="text-2xl custom-font font-bold mb-4">Recommendations For me({recommendationsForMe.length})</h2>
           </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y custom-font divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">My Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">My Query</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {recommendationsForMe.map((recommendationForMe, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendationForMe.productName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendationForMe.queryTitle}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendationForMe.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendationForMe.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{recommendationForMe.reason}</td>
                             
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default RecommendationsForMe;