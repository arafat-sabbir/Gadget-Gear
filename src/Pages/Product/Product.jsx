import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { image, name, brandName, price, rating, type, _id,id } = product;
    const handleDelete =()=>{
        fetch('')
    }
    return (
        <div>
              <div className="card md:card-side bg-base-100 drop-shadow-xl w-[90vw] lg:w-auto  md:w-[90vw] mx-auto">
                <figure><img src={image} className="md:w-[330px] h-[370px] md:h-[235px]" alt="Movie" /></figure>
                <div className="card-body">
                    <h3 > <span className='rounded-md  font-bold text-2xl'>{name}</span> </h3>
                    <p className="text-[#0B0B0B] font-semibold md:text-xl" >{brandName}</p>
                    <p className='font-medium'>{type}</p>
                    <h3 className=" font-semibold">Price ${price}.00</h3>
                    <div className="card-actions">
                    <Link to={`/items/${_id}`}><button className="btn btn-sm btn-outline">Update</button></Link>
                        <button className="btn btn-error btn-sm btn-outline"><AiOutlineDelete></AiOutlineDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;