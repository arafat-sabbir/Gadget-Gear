import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsCart2 } from 'react-icons/bs';
import toast, { Toaster } from "react-hot-toast";


const DetailProduct = () => {

    const product = useLoaderData();
    const { image, name, brandName, price, rating, type, _id, description } = product;
    AOS.init();
    const notify = () => toast.success('Successfully Added To Cart', {
        style: {
            border: '1px solid #FF8F49',
            padding: '16px',
            color: '#FF8F49',
        },
        iconTheme: {
            primary: '#FF8F49',
            secondary: '#FFFAEE',
        },
    });
    const handleAddToCart = (e) => {
        e.preventDefault();
        const Productinfo = { name, type, price, brandName, description, rating, image,productId:_id };
        console.log(Productinfo);

        // add to backend
        fetch('https://n-fs7xbfw8v-arafat-sabbirs-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Productinfo)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                    notify()
                    console.log(data)
                }
            })
    }
  


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
                        <img src={image} className="mx-auto h-[50vh]  rounded-2xl " alt="" />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-duration="1500"

                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="left"
                        className=" ">
                        <div className="flex items-center">
                            <div className="badge badge-success badge-sm"></div>
                            <p className="text-xl font-semibold text-gray-400 ml-2">Detail Of</p>
                        </div>
                        <h3 className="lg:text-4xl text-3xl font-semibold mt-3  ">{name}</h3>
                        <div className="w-full mt-4 gap-4">
                                <h1 className="text-xl text-gray-600  mb-2 font-medium">{description}</h1>
                                <p className="  text-xl"></p>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Price : ${price}</h3>
                            <button className="btn btn-wide bg-[#FF8F49] hover:bg-[#FF8F49]" onClick={handleAddToCart}>Add To <BsCart2></BsCart2></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Toaster></Toaster>
        </div>
    );
};

export default DetailProduct;