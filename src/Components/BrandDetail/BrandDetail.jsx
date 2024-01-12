import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandDetail = ({ brand }) => {
  const { brandname, image } = brand;

  return (
    <>
      <Link to={`/product/${brandname}`}>
        <div className="card w-[400px] h-[300px] hover:shadow-main  rounded-md hover:shadow-[0_0_70px_] transition duration-300  ease-in-out">
          <figure>
            <img
              className="hover:border-[#FF8234] p-10 pt-20"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center">{brandname}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BrandDetail;
BrandDetail.propTypes = {
  brand: PropTypes.object,
};
