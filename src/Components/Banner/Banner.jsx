import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Banner = () => {
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

                    <div className="rounded-xl bg-[url('https://i.ibb.co/9ZzMpGX/header-home-2.jpg')] bg-cover bg-no-repeat h-[400px] card lg:card-side bg-base-100 shadow-xl">
                        <div className="flex justify-center flex-col mx-10">
                            <p className="text-xl font-semibold text-blue-700 my-2">#MonthlyDeals..</p>
                            <h2 className="text-5xl font-bold">FLat 25% Discount on Mobile Phone <br />For Whole One Month</h2>
                            <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="rounded-lg bg-[url('https://i.ibb.co/C6xnR5N/header-home-5.jpg')] bg-cover bg-no-repeat h-[400px] card lg:card-side bg-base-100 shadow-xl">
                        <div className="flex justify-center flex-col mx-10">
                            <p className="text-xl font-semibold text-blue-700 my-2">#WeekLyDeals..</p>
                            <h2 className="text-5xl font-bold">FLat 10% Cashback on Online Payment <br />For  One Week</h2>
                            <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-lg bg-[url('https://i.ibb.co/7rCZMZ4/header-home-1-1.jpg')] bg-cover bg-no-repeat h-[400px] card lg:card-side bg-base-100 shadow-xl">
                        <div className="flex justify-center flex-col mx-10">
                            <p className="text-xl font-semibold text-blue-700 my-2">#DailyDeals..</p>
                            <h2 className="text-5xl font-bold">Get Rewards On every Purchase<br />You make Today</h2>
                            <button className="btn my-2 bg-[#FF914C] hover:bg-[#FF914C] w-[200px]">Get Promo</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;