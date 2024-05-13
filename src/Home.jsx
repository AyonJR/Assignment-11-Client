import Banner from "./Banner";
import HomePageCards from "./HomePageCards";
import StatisticsSection from "./StatisticsSection";


const Home = () => {
    return (
        <div > 
           <Banner></Banner>
           <div>
            <HomePageCards></HomePageCards>
           </div>
           <div className="mt-16">
            <StatisticsSection></StatisticsSection>
           </div>
        </div>
    );
};

export default Home;