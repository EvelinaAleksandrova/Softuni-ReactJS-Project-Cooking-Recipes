import './HomePage.css';
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import ContactUs from "./ContactUs/ContactUs";


const HomePage = () => {
    return (
        <>
            <Home/>
            <AboutUs/>
            <Team/>
            <div className="little-color-space"/>
           <ContactUs/>
        </>
    );
}
export default HomePage;