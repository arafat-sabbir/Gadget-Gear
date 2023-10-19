import Banner from "../Components/Banner/Banner";
import Brand from "../Components/BrandSection/Brand";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brand></Brand>
            <Footer></Footer>
        </div>
    );
};

export default Home;