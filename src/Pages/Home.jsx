import Banner from "../Components/Banner/Banner";
import Brand from "../Components/BrandSection/Brand";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NewArrival from "../Components/Newarrival/NewArrival";
import Support from "../Components/Support/Support";
import WhyUs from "../Components/WhyUS/Whyus";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <NewArrival></NewArrival>
            <WhyUs></WhyUs>
            <Support></Support>
        </div>
    );
};

export default Home;