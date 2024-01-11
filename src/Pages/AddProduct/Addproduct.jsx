import { useContext } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const AddProduct = () => {
  const { user } = useContext(Context);

  const handleAddProduct = (e) => {
    console.log(user);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const PhotoUrl = form.photourl.value;
    const ProductInfo = {
      name,
      type,
      price,
      brandName: brand,
      description,
      rating,
      image: PhotoUrl,
    };
    console.log(ProductInfo);
    // add to backend
    axios.post("/https://gadgetgear-server.vercel.app/product",ProductInfo)
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Product Added Successfully")
        }
      });
  };

  return (
    <>
      <div className="hero min-h-[calc(100vh-309px)]   ">
        <div className="hero-content flex-col  w-full">
          <div className="text-center">
            <h1 className=" text-[#FF8234] text-5xl font-bold tracking-widest mt-6 lg:mt-0">ADD Product!</h1>
          </div>
          <div className="card flex-shrink-0 w-full -2xl bg-transparent backdrop-blur-lg rounded-lg ">
            <form onSubmit={handleAddProduct} className="card-body">
              {/* name and chef row */}
              <div className="md:flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Product name"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    placeholder="Photo Url"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              {/* tase  and supplier row */}
              <div className="md:flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Product Type
                    </span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Product Type"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Product Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Product Price"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              {/* category and detail row */}
              <div className="md:flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Brand Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg lg:text-black">
                      Product Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Product Rating"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg lg:text-black">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Short Description"
                  className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Add Product"
                  className="border font-semibold  py-2 rounded-sm border-gray-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
