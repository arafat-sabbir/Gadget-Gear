import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Banner = () => {
    AOS.init();
    return (
        <div className='container mx-auto'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div 
                    className="rounded-xl bg-cover bg-no-repeat h-[500px] bg-[#F7E5D5] card lg:card-side shadow-xl">
                        <div 
                        className="flex flex-col md:flex-row justify-center items-center ml-10">
                            <div data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="1500"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="right"
                            className='w-1/2'>
                                <p className="text-xl font-semibold text-blue-700 my-2">#FIRSTBUYDEALS..</p>
                                <h2 className="text-5xl font-bold">Get Upto 15% CashBack  on Your First Purchase</h2>
                                <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                            </div>
                            <img data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-duration="1500"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="left"
                                src="https://i.ibb.co/y8RCLwD/banner.png" alt="" className='md:w-1/2 md:h-full' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="rounded-xl bg-cover bg-no-repeat h-[500px] bg-[#DCF4E0] card lg:card-side shadow-xl">
                        <div className="flex flex-col md:flex-row justify-center items-center ml-10">
                            <div className='w-1/2'>
                                <p className="text-xl font-semibold text-blue-700 my-2">#LAPTOPDEALS..</p>
                                <h2 className="text-5xl font-bold">Get Upto FLat 25% Discount in Your Laptop Purchase</h2>
                                <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                            </div>
                            <img  src="https://i.ibb.co/Kyp6xY3/banner-hero-2.png" alt="" className='md:w-1/2 md:h-full' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-xl bg-cover bg-no-repeat h-[500px] bg-[#D4F7FF] card lg:card-side shadow-xl">
                        <div className="flex flex-col md:flex-row justify-center items-center ml-10">
                            <div className='w-1/2'>
                                <p className="text-xl font-semibold text-blue-700 my-2">#MOBILE&WATCHDEAL..</p>
                                <h2 className="text-5xl font-bold">Big Sale Upto 45% On Mobile And Watch Purchase</h2>
                                <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                            </div>
                            <img src="https://i.ibb.co/JpH86zM/banner-1.png" alt="" className='md:w-1/2 md:h-full' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;