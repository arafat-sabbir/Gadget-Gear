import { useEffect, useRef, useState } from "react";
import BrandDetail from "../BrandDetail/BrandDetail";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView } from "framer-motion";

const Brand = () => {
  const {
    data: brands,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: "brands",
    queryFn: async () => {
      const response = await axios.get(
        "https://gadgetgear-server.vercel.app/brand"
      );
      return response.data;
    },
  });
  const useRef1 = useRef(null);
  const animate1 = useInView(useRef1);
  return (
    <div className="container mx-auto my-12">
      <h3 className="md:text-5xl text-4xl tracking-widest  text-center text-main font-semibold mb-6">
        Choose By Brand
      </h3>
      <div
        ref={useRef1}
        style={{
          opacity: animate1 ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        className={
          brands
            ? "grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-12 justify-items-center p-4 "
            : ""
        }
      >
        {brands ? (
          brands?.map((brand) => (
            <BrandDetail key={brand.id} brand={brand}></BrandDetail>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-warning loading-lg"></span>
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default Brand;
