import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MySingleQuery from "./MySingleQuery";

const MyQueries = () => { 

    const { user } = useContext(AuthContext)
    const [query , setQuery] = useState([])
   
 
     useEffect(()=> {
          const getData = async ()=> {
            const { data } = await axios( 
                `http://localhost:5000/queries/${user?.email}`
            )
            setQuery(data)
        }
        getData()
         
     } , [user])

console.log(query)


 return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                  query.map(mySingleQuery => <MySingleQuery key={mySingleQuery._id} mySingleQuery={mySingleQuery}></MySingleQuery>)
                }
            </div>
        </div>
    );
};

export default MyQueries;