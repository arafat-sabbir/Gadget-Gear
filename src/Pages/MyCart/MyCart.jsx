import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsCart2 } from 'react-icons/bs';
import CartProduct from "../../Components/CartProduct/CartProduct";
import swal from "sweetalert";
import { useState } from "react";


const MyCart = () => {
    const loadedcartdata = useLoaderData();
    const [cartdata, setProduct] = useState(loadedcartdata)
    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });
        if (willDelete) {
            fetch(`https://n-mqijp1ia6-arafat-sabbirs-projects.vercel.app/cart/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted!", "Your Product has been deleted!", "success");

                        const newOne = cartdata.filter(coffee => coffee._id !== _id)
                        setProduct(newOne)

                    }

                })
        }
    }
    return (
        <div>
            <div  className="container mx-auto">
                <Navbar></Navbar>
                <h3 className="flex gap-2 text-3xl font-semibold justify-center text-[#f8863e] mt-8">ToTal Product On <BsCart2></BsCart2> : {cartdata.length}</h3>
                <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3  gap-12 py-20 ">
                    {
                        cartdata.map(data => <CartProduct data={data} key={data.id} handleDelete={handleDelete}></CartProduct>)
                    }
                </div>
            </div>
        </div>

    );
};

export default MyCart;