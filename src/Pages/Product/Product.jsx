import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import PropType from 'prop-types'

import '@smastrom/react-rating/style.css'


const Product = ({ product, handleDelete }) => {
    const { image, name, brandName, price, rating, type, _id,} = product;

    return (
        <div>
            <div className="card md:card-side bg-base-100 drop-shadow-xl w-[90vw] lg:w-auto  md:w-[90vw] mx-auto">
                <figure><img src={image} className="md:w-[350px] h-[370px] md:h-[283px]" alt="Movie" /></figure>
                <div className="card-body">
                    <h3 > <span className='rounded-md  font-bold text-2xl'>{name}</span> </h3>
                    <p className="text-[#0B0B0B] font-semibold md:text-xl" >Brand : {brandName}</p>
                    <p className='font-medium'>Type : {type}</p>
                    <h3 className=" font-semibold">Price : <span className='text-[#FC815C]'>${price}.00</span></h3>
                    <h3 className="my-2"> <Rating style={{ maxWidth: 120 }} readOnly  value={rating} /></h3>

                    <div className="card-actions">
                        <Link to={`/items/${_id}`}><button className="btn btn-sm btn-outline">Update</button></Link>
                        <Link to={`/details/${_id}`}><button className="btn btn-sm btn-outline">Details</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm btn-outline"><AiOutlineDelete></AiOutlineDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
Product.propTypes = {
    product:PropType.object,
    handleDelete:PropType.func

}