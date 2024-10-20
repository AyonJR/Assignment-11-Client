import AboutUs from "./AboutUs";
import Advertise from "./Advertise";
import Banner from "./Banner";
import HomePageCards from "./HomePageCards";


const Home = () => {
    return (
        <div > 
           <div className=" lg:mx-20"> 
           <Banner></Banner>
           </div>
           <div className=" mt-16"> 
           <Advertise></Advertise>
           </div>
           
           <div className="mt-32">
            <HomePageCards></HomePageCards>
           </div>
           {/* <div className="mt-16">
            <StatisticsSection></StatisticsSection>
           </div>
           <div className="mt-16">
           <CTAsection></CTAsection>
           </div> */}
        </div>
    );
};

export default Home;