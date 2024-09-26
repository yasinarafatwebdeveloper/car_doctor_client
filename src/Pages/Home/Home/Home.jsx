import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
            {/* this is home components */}
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
        </div>
    );
};

export default Home;