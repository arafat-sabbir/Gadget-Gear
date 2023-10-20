import { useEffect, useState } from "react";
import BrandDetail from "../BrandDetail/BrandDetail";

const Brand = () => {
    const [brands, setBrands] = useState(null)
    useEffect(() => {
        fetch('https://gadgetgear-server.vercel.app/brand')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    console.log(brands);
    return (
        <div className="container mx-auto my-12">
            <h3 className="text-4xl text-center text-[#ff8234] font-semibold mb-6">Search By Brand</h3>
            <div className={brands?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center p-4 ":''}>
                {
                    brands? brands?.map(brand => <BrandDetail key={brand.id} brand={brand}></BrandDetail>):
                   <div className="flex justify-center items-center">
                     <span className="loading loading-spinner text-warning loading-lg"></span>
                   </div>
                }
                {
                    
                }
            </div>
        </div>

    );
};

export default Brand;