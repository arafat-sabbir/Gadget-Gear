import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../Product/Product";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import swal from "sweetalert";
import ErrorPage from "../ErrorPage/ErrorPage";

const Brandproduct = () => {
    const loadedproducts = useLoaderData();
    const [products,setProduct] = useState(loadedproducts)
    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            fetch(`http://localhost:5000/items/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted!", "Your imaginary file has been deleted!", "success");

                        const newOne = products.filter(coffee => coffee._id !== _id)
                        setProduct(newOne)

                    }

                })
        }
    }
    return (
        <div>
            <div className="container mx-auto">
            <Navbar></Navbar>
            <div className={`${loadedproducts.length?"grid grid-cols-1 my-20 lg:grid-cols-2 gap-8 mx-auto justify-center":'h-[64vh] items-center justify-center'}`}>
                {
                    loadedproducts.length ?
                        products?.map(product => <Product handleDelete={handleDelete} key={product.id} product={product}></Product>):<div>
                            <img src="https://i.ibb.co/gTSPFgD/icons8-unavailable-500.png" className="mx-auto flex justify-center items-center" alt="" />
                            <h3 className="text-center text-[#FF8F49] text-3xl font-semibold">Sorry ! No Product Available For This Brand.. </h3>
                        </div>
                    
                }
            </div>
        </div>
        </div>
    );
};

export default Brandproduct;