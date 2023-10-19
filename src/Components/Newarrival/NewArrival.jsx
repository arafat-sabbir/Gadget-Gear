const NewArrival = () => {
    return (
        <div className="container mx-auto my-32 p-4">
            <h3 className="text-4xl font-semibold text-center my-12 text-[#ff8234]">New Arrival</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-20">
            <div className="card card-compact  bg-base-100 border-2 hover:border-b-[#ff8234] transition duration-300 ease-in-out hover:scale-110">
                <figure><img src="https://i.ibb.co/bQ8c0kY/mockup-free-ikg-P7-AQs2r4-unsplash.jpg" className="h-[390px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className=" badge bg-[#ff8234] flex">NEW</div>
                    <h2 className="text-3xl font-semibold">IPHONE 15 pro Max</h2>
                    <p className="text-2xl font-semibold"> Price : <span className="text-[#ff8234]">$1199</span> </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#ff8234] hover:bg-[#ff8234]">View Detail</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 border-2 hover:border-b-[#ff8234]  transition duration-300 ease-in-out hover:scale-110">
                <figure><img src="https://i.ibb.co/PGsLHQ7/samuel-angor-d-OHDjkz7-X3k-unsplash.jpg" className="h-[390px]" alt="Shoes" /></figure>
                <div className="card-body">
                <div className=" badge bg-[#ff8234] flex">NEW</div>
                    <h2 className="text-3xl font-semibold ">Pixel 8 Pro</h2>
                    <p className="text-2xl font-semibold">Price : <span className="text-[#ff8234]">$899</span> </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#ff8234] hover:bg-[#ff8234]">View Detail</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact  bg-base-100 border-2 hover:border-b-[#ff8234]  transition duration-300 ease-in-out hover:scale-110">
                <figure><img src="https://i.ibb.co/6tfhpbh/emiliano-cicero-OKZqs-Vseko-unsplash.jpg" className="h-[390px]"alt="Shoes" /></figure>
                <div className="card-body">
                <div className=" badge bg-[#ff8234] flex">NEW</div>
                    <h2 className="text-3xl font-semibold">Pixel Watch 2 </h2>
                    <p className="text-2xl font-semibold">Price : <span className="text-[#ff8234]">$499</span> </p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#ff8234] hover:bg-[#ff8234]">View Detail</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewArrival;