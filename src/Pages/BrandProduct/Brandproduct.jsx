import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../Product/Product";
import { useState } from "react";
import swal from "sweetalert";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pagination } from 'swiper/modules';
import Footer from "../../Components/Footer/Footer";

const Brandproduct = () => {
    const loadedproducts = useLoaderData();
    const [products, setProduct] = useState(loadedproducts)
    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            fetch(`https://gadgetgear-server.vercel.app/items/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted!", "Your Product has been deleted!", "success");

                        const newOne = products.filter(coffee => coffee._id !== _id)
                        setProduct(newOne)

                    }

                })
        }
    }
    AOS.init();
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                {/* swiper js */}
                {
                    loadedproducts.length ? <div>
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
                    </div> : ''
                }
                {/* swiper js */}

                <div data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-duration="1500"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top"
                className={`${loadedproducts.length ? "grid grid-cols-1  my-20 lg:grid-cols-2 gap-8 mx-auto justify-center" : 'h-[68vh] items-center justify-center pb-1'}`}>
                    {
                        loadedproducts.length ?
                            products?.map(product => <Product handleDelete={handleDelete} key={product.id} product={product}></Product>) : <div>
                                <img src="https://i.ibb.co/gTSPFgD/icons8-unavailable-500.png" className="mx-auto flex justify-center items-center" alt="" />
                                <h3 className="text-center text-[#FF8F49] text-3xl font-semibold">Sorry ! No Product Available For This Brand.. </h3>
                            </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Brandproduct;