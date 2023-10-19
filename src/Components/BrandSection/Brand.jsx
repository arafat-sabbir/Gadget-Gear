import { useEffect, useState } from "react";
import BrandDetail from "../BrandDetail/BrandDetail";

const Brand = () => {
    const [brands, setBrands] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    console.log(brands);
    return (
        <div className="container mx-auto my-12">
            <h3 className="text-4xl text-center text-[#ff8234] font-semibold mb-12">Search By Brand</h3>
            <div className={brands?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center p-4 ":''}>
                {
                    brands? brands?.map(brand => <BrandDetail key={brand.id} brand={brand}></BrandDetail>):
                     <div >
                        <img className="mx-auto" src="https://i.ibb.co/NNZHsTK/404.gif"></img>
                    <h3 className="text-3xl font-semibold text-center text-[#ff8234] mb-12">Sorry Server Error..! <br /> Please Wait This will be fix soon..</h3>
                     </div>
                }
                {
                    
                }
            </div>
        </div>

    );
};

export default Brand;