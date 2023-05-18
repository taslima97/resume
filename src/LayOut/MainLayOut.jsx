import { Outlet } from "react-router-dom";
import Footer from "../sheard/Footer/Footer";
import NavigationBar from "../sheard/NavigationBar/NavigationBar";


const MainLayOut = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;