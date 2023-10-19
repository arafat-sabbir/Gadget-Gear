const Product = ({ product }) => {
    const { image,name,brandName,price,rating } = product;
    return (
        <div>
            <div className="card w-[360px] rounded-none rounded-t-xl rounded-b-xl transition duration-300 ease-in-out hover:scale-105 bg-transparent drop-shadow-xl border-2">
                <figure><img  className="rounded-t-xl w-full h-72" src={image} alt="Shoes" /></figure>
                <div className="text-center mt-6">
                    <h2 className="text-2xl">{name}</h2>
                    <p>{brandName}</p>
                    <h3>Price : ${price}</h3>
                    <h3>Rating : {rating}</h3>


                </div>
            </div>
        </div>
    );
};

export default Product;