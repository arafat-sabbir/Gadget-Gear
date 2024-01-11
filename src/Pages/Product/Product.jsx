import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import PropType from "prop-types";

import "@smastrom/react-rating/style.css";
import useUserinfo from "../../Utility/Hooks/userUserInfo/useUserinfo";

const Product = ({ product, handleDelete }) => {
  const { image, name, brandName, price, rating, type, _id } = product;
  const { userInfo } = useUserinfo();

  return (
    <div>
      <div className="card md:card-side rounded-md bg-base-100 border-2 hover:border-r-[#FF8234]  w-[90vw] lg:w-auto  md:w-[90vw] mx-auto">
        <figure>
          <img
            src={image}
            className="md:w-[350px] h-[370px] md:h-[287px]"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h3>
            {" "}
            <span className="rounded-md  font-bold text-2xl">{name}</span>{" "}
          </h3>
          <p className="text-[#0B0B0B] font-semibold md:text-xl">
            Brand : {brandName}
          </p>
          <p className="font-medium">Type : {type}</p>
          <h3 className=" font-semibold">
            Price : <span className="text-[#FC815C]">${price}.00</span>
          </h3>
          <h3 className="my-2">
            {" "}
            <Rating style={{ maxWidth: 120 }} readOnly value={rating} />
          </h3>

          <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <button className="border  border-black rounded-sm py-1 px-5 font-medium hover:scale-105 transition duration-300">
                See Details
              </button>
            </Link>
            {userInfo?.userRole === "admin" && (
              <p className="flex gap-2">
                <Link to={`/items/${_id}`}>
                  <button className="btn btn-sm btn-outline hover:bg-transparent hover:text-black rounded-sm">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-error btn-sm btn-outline  rounded-sm"
                >
                  Delete<AiOutlineDelete></AiOutlineDelete>
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropType.object,
  handleDelete: PropType.func,
};
