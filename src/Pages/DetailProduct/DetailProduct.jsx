import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";
const DetailProduct = () => {
    const {user} = useContext(Context)

    const product = useLoaderData();
    const { image, name, brandName, price, rating, type,_id,description } = product;
    AOS.init();
    return (
        <div>
            <div>
        <Navbar></Navbar>
         <div className="container mx-auto my-12 items-center  gap-20  ">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="2000"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="right"
                    className=" my-12 lg:my-auto ">
                    <img src={image}  className="mx-auto h-[50vh]  rounded-2xl " alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="1500"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="left"
                    className="w-1/2 ">
                    <div className="flex items-center">
                        <div className="badge badge-success badge-sm"></div>
                        <p className="text-xl font-semibold text-gray-400 ml-2">Detail Of</p>
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-semibold my-8 ">{name}</h3>
                    <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
                        {/* <img className="w-16 h-16"  alt="" /> */}
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">{description}</h1>
                            <p className="text-gray-400  text-xl">uhajlkdnfk</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
            
        </div>
    );
};

export default DetailProduct;