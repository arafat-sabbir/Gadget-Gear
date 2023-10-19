import Navbar from "../../Components/Navbar/Navbar";

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photourl = form.photourl.value;
        const Productinfo = { name, chef, supplier, taste, category, detail, photourl };
        console.log(Productinfo);
        // add to backend
        // fetch('https://coffy-shop-server-4yqip2v9d-arafat-sabbirs-projects.vercel.app/Producte', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(Productinfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             toast.success('successfully Added Producte')
        //         }
        //     })
    }


    return (
        <div className="bg-[url('https://i.ibb.co/LZhwJ1T/workplace-business-modern-male-accessories-laptop-black-background-1.jpg')]   h-screen bg-cover bg-no-repeat   ">
            <Navbar></Navbar>
             <div className="hero h-[86vh]  bg-transparent ">
                <div className="hero-content flex-col  w-full">
                    <div className="text-center">
                        <h1 className=" text-[#ff8234] text-5xl font-bold">ADD Product!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full -2xl bg-transparent backdrop-blur-lg rounded-lg ">
                        <form onSubmit={handleAddProduct} className="card-body">
                            {/* name and chef row */}
                            <div className="flex gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Product name" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Photo Url</span>
                                    </label>
                                    <input type="text"
                                        name="chef"
                                        placeholder="Photo Url" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                            </div>
                            {/* tase  and supplier row */}
                            <div className="flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Type</span>
                                    </label>
                                    <input type="text"
                                        name="supplier"
                                        placeholder="Product Type" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Price</span>
                                    </label>
                                    <input type="text"
                                        name="taste"
                                        placeholder="Enter Product Price" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                            </div>
                            {/* category and detail row */}
                            <div className="flex gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Brand Name</span>
                                    </label>
                                    <input type="text"
                                        name="category"
                                        placeholder="Brand Name" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Rating</span>
                                    </label>
                                    <input type="text"
                                        name="rating"
                                        placeholder="Product detail" className="input text-gray-300 bg-transparent input-bordered text-lg" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-300">Short Description</span>
                                </label>
                                <input type="text"
                                    name="photourl"
                                    placeholder="Enter Short Description" className="input bg-transparent text-gray-300 input-bordered text-lg" required />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Add Product" className="btn text-gray-300 border-none hover:bg-[#ff8234b6] bg-[#ff8234c4]" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;