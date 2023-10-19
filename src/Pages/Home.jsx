import Banner from "../Components/Banner/Banner";
import Brand from "../Components/BrandSection/Brand";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            {/* <div className="bg-[url('https://i.ibb.co/G7NvD3M/1702-m10-i304-n021-F-c06-350897954-Doodle-video-and-computer-electronic-device-hand-drawn-vector-ill.jpg')] bg-cover bg-inherit bg-no-repeat h-screen"> */}
            <Navbar></Navbar>
            <Banner></Banner>
            {/* </div> */}
            <Brand></Brand>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;