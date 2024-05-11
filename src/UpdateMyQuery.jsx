import { useLoaderData } from "react-router-dom";

const UpdateMyQuery = () => {
   const query = useLoaderData() ;
   console.log(query)

   const { productName,
    productBrand,
    imageUrl,
    queryTitle,
    boycottingReason,
    userEmail,
    userName,
    userPhoto,
    currentDateAndTime,
    recommendation } = query;



    return (
        <div>
            <h2>hello i am update : {productName} {}</h2>
        </div>
    );
};

export default UpdateMyQuery;