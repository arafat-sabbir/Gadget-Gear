import { BsCart2 } from "react-icons/bs";
import CartProduct from "../../Components/CartProduct/CartProduct";
import swal from "sweetalert";
import { useEffect, useState } from "react";

import useAuth from "../../Utility/Hooks/UseAuth/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyCart = () => {
  const { user } = useAuth()
  const userEmail = user.email;
  const {data:cartdata,isLoading,isPending,refetch}= useQuery({
    queryKey:["product"],
    queryFn:async()=>{
      const res = await axios.get(`https://gadgetgear-server.vercel.app/cart/${userEmail}`)
      return res.data;
    }
  })
  const handleDelete = async (_id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this file?",
      icon: "warning",
      dangerMode: true,
    });
    if (willDelete) {
      axios.delete(`https://gadgetgear-server.vercel.app/cart/${_id}`)
        .then((data) => {
          if (data.data.deletedCount > 0) {
           toast.success("Your Product has been deleted!")
            refetch()
          }
        });
    }
  };
  if(isLoading||isPending){
    return <div>Loading...</div>
  }
  const totalPrice = cartdata.reduce((item,total)=>item+total.price,0)
  return (
    <div className="min-h-[calc(100vh-319px)]">
      <div className="container mx-auto">
        <h3 className="flex gap-2 text-3xl font-semibold justify-left text-center ml-4 text-main mt-8">
          Total Product : {cartdata?.length}
        </h3>
        <h3 className="text-3xl font-semibold justify-left ml-4 text-main mt-8">Total Price : {totalPrice} </h3>
        <div className="grid grid-cols-1 p-4 xl:grid-cols-2  gap-12 py-20">
          {cartdata?.map((data) => (
            <CartProduct
              data={data}
              key={data.id}
              handleDelete={handleDelete}
            ></CartProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
