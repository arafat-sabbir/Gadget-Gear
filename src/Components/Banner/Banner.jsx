// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import {  Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';



const Banner = () => {
    return (
        <div className="container mx-auto lg:flex gap-5 justify-center text-center items-center lg:-mt-10">
            <div className=" lg:w-1/2 text-center">
                <h3 className="md:text-5xl text-2xl font-semibold ">Discover Tomorrow's Tech Today At  <span className="text-bold text-[#FF8234]">GadgetGear</span>  Your Gadget Wonderland!</h3>
            </div>
            <div className="w-1/2 mx-auto lg:mx-0">
                <img src="https://i.ibb.co/SNvh6rT/banner.jpg" alt="" />
            </div>

        </div >
    );
};

export default Banner;