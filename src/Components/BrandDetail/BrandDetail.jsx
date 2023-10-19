import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const BrandDetail = ({ brand }) => {
    const { brandname, image, id } = brand

    return (
        <div>
           <Link to={`/brand/${id}`}>
           <div className="card w-72 drop-shadow-xl   transition duration-300 ease-in-out hover:scale-110 ">
                <figure><img className="rounded-full border-2  hover:border-warning  p-10 " src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold text-center">
                        {brandname}
                    </h2>
                </div>
            </div>
           </Link>
        </div>
    );
};

export default BrandDetail;
BrandDetail.propTypes ={
    brand:PropTypes.object
}


