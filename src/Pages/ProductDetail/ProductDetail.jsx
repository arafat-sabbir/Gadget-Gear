import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const product = useLoaderData();
  const { image, name, brandName, price, rating, type, _id, description } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photourl = form.photourl.value;
    const Productinfo = {
      name,
      type,
      price,
      brandName: brand,
      description,
      rating,
      image: photourl,
    };
    // add to backend
    fetch(`https://gadgetgear-server.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Productinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Great!",
            "Product detail Updated Successfully!",
            "success"
          );
        }
      });
  };

  return (
    <div className="">
      <div>
        <h3 className="text-3xl font-semibold text-center -mt-6 my-6 text-white">
          Update This Product
        </h3>
        <div className="card md:card-side bg-transparent backdrop-blur-sm text-white drop-shadow-3xl w-[90vw]   md:w-[50vw] mx-auto">
          <figure>
            <img
              src={image}
              className="md:w-[330px] md:h-[235px]"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h3>
              {" "}
              <span className="rounded-md  font-bold text-2xl">
                {name}
              </span>{" "}
            </h3>
            <p className=" font-semibold md:text-xl">{brandName}</p>
            <p className="font-medium">{type}</p>
            <h3 className=" font-semibold">Price: ${price}.00</h3>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
      <div className="hero  bg-transparent ">
        <div className="hero-content flex-col  w-full">
          <div className="card flex-shrink-0 w-full  bg-transparent backdrop-blur-lg rounded-lg ">
            {/* Update Product form */}
            <form onSubmit={handleUpdateProduct} className="card-body">
              <div className="md:flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Product name"
                    defaultValue={name}
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Photo Url
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photourl"
                    defaultValue={image}
                    placeholder="Photo Url"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Product Type
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={type}
                    name="type"
                    placeholder="Product Type"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Product Price
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={price}
                    name="price"
                    placeholder="Enter Product Price"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Brand Name
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={brandName}
                    name="brand"
                    placeholder="Brand Name"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg text-black">
                      Product Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Product detail"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-black">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Short Description"
                  className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                  defaultValue={description}
                />
              </div>

              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Update"
                  className="border font-semibold  py-2 rounded-sm border-gray-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
