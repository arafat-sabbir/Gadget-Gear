import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../Product/Product";

const Brandproduct = () => {
    const products = useLoaderData();

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Brandproduct;