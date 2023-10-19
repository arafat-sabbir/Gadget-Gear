import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../Components/Navbar/Navbar";

const AddProduct = () => {
    const notify = () => toast.success('successfully Added Product', {
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

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const description = form.description.value;
        const rating = form.rating.value
        const photourl = form.photourl.value;
        const Productinfo = { name, type, price, brandName:brand, description, rating, image:photourl };
        console.log(Productinfo);
        // add to backend
        fetch('https://n-fs7xbfw8v-arafat-sabbirs-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Productinfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify()
                }
            })
    }


    return (
        <div className="lg:bg-[url('https://i.ibb.co/LZhwJ1T/workplace-business-modern-male-accessories-laptop-black-background-1.jpg')] min-h-fit lg:h-screen bg-cover bg-no-repeat   ">
            <Navbar></Navbar>
             <div className="hero h-[86vh]  bg-transparent ">
                <div className="hero-content flex-col  w-full">
                    <div className="text-center">
                        <h1 className=" text-[#FF8234] text-5xl font-bold">ADD Product!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full -2xl bg-transparent backdrop-blur-lg rounded-lg ">
                        <form onSubmit={handleAddProduct} className="card-body">
                            {/* name and chef row */}
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Product name" className="input text-gray-300 bg-transparent border border-[#ff823488]  text-lg" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Photo Url</span>
                                    </label>
                                    <input type="text"
                                        name="photourl"
                                        placeholder="Photo Url" className="input text-gray-300 bg-transparent border border-[#ff823485] text-lg" required />
                                </div>
                            </div>
                            {/* tase  and supplier row */}
                            <div className="md:flex gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Type</span>
                                    </label>
                                    <input type="text"
                                        name="type"
                                        placeholder="Product Type" className="input text-gray-300 bg-transparent border border-[#ff823485] text-lg" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Price</span>
                                    </label>
                                    <input type="text"
                                        name="price"
                                        placeholder="Enter Product Price" className="input text-gray-300 bg-transparent border border-[#ff823485] text-lg" required />
                                </div>
                            </div>
                            {/* category and detail row */}
                            <div className="md:flex gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Brand Name</span>
                                    </label>
                                    <input type="text"
                                        name="brand"
                                        placeholder="Brand Name" className="input text-gray-300 bg-transparent border border-[#ff823485] text-lg" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-300">Product Rating</span>
                                    </label>
                                    <input type="text"
                                        name="rating"
                                        placeholder="Product detail" className="input text-gray-300 bg-transparent border border-[#ff823485] text-lg" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-300">Short Description</span>
                                </label>
                                <input type="text"
                                    name="description"
                                    placeholder="Enter Short Description" className="input bg-transparent text-gray-300 border border-[#ff823485] text-lg" required />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Add Product" className="btn text-gray-200 border-none hover:bg-[#ff8234b4] bg-[#ff8234be]" />
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default AddProduct;