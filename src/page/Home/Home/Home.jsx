
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Tab from "../Tab/Tab";


const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <Tab></Tab>
            <About></About>
           <h2 className="text-6xl">This is home</h2> 
        </div>
    );
};

export default Home;