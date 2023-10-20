import { Rating } from '@smastrom/react-rating'
import PropType from 'prop-types'

import '@smastrom/react-rating/style.css'
import { AiOutlineDelete } from 'react-icons/ai';

const CartProduct = ({data,handleDelete}) => {
    const { image, name, brandName, price, rating, type,_id} = data;
    console.log(image);
    return (
        <div>
            <div className="">
                        <div className="card   drop-shadow-xl border-2 hover:border-b-[#FF8234] lg:w-[400px] mx-auto">
                            <figure><img src={image} className="w-full h-[300px] bg-transparent"  alt="Movie" /></figure>
                            <div className="card-body">
                                <h3 > <span className='rounded-md  font-bold text-2xl'>{name}</span> </h3>
                                <p className=" font-semibold md:text-xl" >{brandName}</p>
                                <p className='font-medium'>{type}</p>
                                <h3 className=" font-semibold">Price: ${price}.00</h3>
                                <h3> <Rating style={{ maxWidth: 120 }} readOnly  value={rating} /></h3>
                                <div className="card-actions">
                                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm btn-outline"><AiOutlineDelete></AiOutlineDelete></button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default CartProduct;
CartProduct.propTypes= {
    data:PropType.object,
    handleDelete:PropType.object
}