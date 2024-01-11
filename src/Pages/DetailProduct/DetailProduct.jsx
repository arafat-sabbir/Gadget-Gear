import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCart2 } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import useUserinfo from "../../Utility/Hooks/userUserInfo/useUserinfo";

const DetailProduct = () => {
  const { user } = useContext(Context);
  const { userInfo } = useUserinfo();
  const product = useLoaderData();
  const { image, name, brandName, price, rating, type, _id, description } =
    product;
  const userEmail = user.email;

  AOS.init();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleAddToCart = (e) => {
    const toastId = toast.loading("Product Adding To Cart");
    e.preventDefault();
    const Productinfo = {
      name,
      type,
      price,
      brandName,
      description,
      rating,
      image,
      productId: _id,
      userEmail,
    };

    // add to backend
    axios
      .post("https://gadgetgear-server.vercel.app/cart/", Productinfo)
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Product added Successfully", { id: toastId });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="container mx-auto my-12 items-center  gap-20  ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="right"
            className=" my-12 lg:my-auto "
          >
            <img
              src={image}
              className="mx-auto h-[50vh]  rounded-2xl "
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="left"
            className=" "
          >
            <div className="flex items-center">
              <div className="badge badge-success badge-sm"></div>
              <p className="text-xl font-semibold text-gray-400 ml-2">
                Detail Of
              </p>
            </div>
            <h3 className="lg:text-4xl text-3xl font-semibold mt-3  ">
              {name}
            </h3>
            <div className="w-full mt-4 gap-4">
              <h1 className="text-xl text-gray-600  mb-2 font-medium">
                {description}
              </h1>
              <p className="  text-xl"></p>
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Price : ${price}
                </h3>
                {userInfo?.userRole !== "admin" && (
                  <button
                    className="border font-semibold  py-2 px-10 rounded-sm border-gray-500"
                    onClick={handleAddToCart}
                  >
                    <span className="flex justify-center items-center gap-2">
                      {" "}
                      Add To <BsCart2 size={20}></BsCart2>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
