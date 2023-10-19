import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsCart2 } from 'react-icons/bs';
import CartProduct from "../../Components/CartProduct/CartProduct";


const MyCart = () => {
    const cartdata = useLoaderData();
    console.log(cartdata);
    return (
        <div style={{Bacopacity:'.9'}} className={`${cartdata.length > 3? "bg-[url('https://i.ibb.co/LZhwJ1T/workplace-business-modern-male-accessories-laptop-black-background-1.jpg')]  min-h-screen-fit bg-opacity-0 bg-cover bg-no-repeat":"bg-[url('https://i.ibb.co/LZhwJ1T/workplace-business-modern-male-accessories-laptop-black-background-1.jpg')]  h-screen bg-opacity-0 bg-cover bg-no-repeat"}`}>
            <div  className="container mx-auto">
                <Navbar></Navbar>
                <h3 className="flex gap-2 text-3xl font-semibold justify-center text-[#f8863e] mt-8">ToTal Product On <BsCart2></BsCart2> : {cartdata.length}</h3>
                <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3  gap-12 py-20 ">
                    {
                        cartdata.map(data => <CartProduct data={data} key={data.id}></CartProduct>)
                    }
                </div>
            </div>
        </div>

    );
};

export default MyCart;