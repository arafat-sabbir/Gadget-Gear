import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../Product/Product";
import Footer from "../../Components/Footer/Footer";

const Brandproduct = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
                {
                    products?.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Brandproduct;