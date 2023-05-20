
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Tab from "../Tab/Tab";
import img from '../../../assets/images/two-new.jpg'
const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <Tab></Tab>
            <About></About>
            <div className="relative my-24 mx-auto w-1/2 bg-gradient-to-r from-[#f1b3b3] to-[rgba(21, 21, 21, 0)]">
                <img className="h-48 w-full" src={img} alt="" />
                <div className="absolute top-0 bottom-0">
                    <h2 className="text-5xl font-bold">Awlays keep a positive <br /> mindset</h2>

                </div>
            </div>
        </div>
    );
};

export default Home;