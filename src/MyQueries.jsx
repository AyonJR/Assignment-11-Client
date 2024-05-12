import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import MySingleQuery from "./MySingleQuery";

const MyQueries = () => { 

    const { user } = useContext(AuthContext)
    const [query , setQuery] = useState([])
   
 
     useEffect(()=> {
          
         
     } , [user])
     const getData = async ()=> {
            const { data } = await axios( 
                `http://localhost:5000/queries/${user?.email}`
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                  query.map(mySingleQuery => <MySingleQuery key={mySingleQuery._id} mySingleQuery={mySingleQuery} handleDelete={handleDelete}></MySingleQuery>)
                }
            </div>
        </div>
    );
};

export default MyQueries;