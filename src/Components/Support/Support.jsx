import { useInView } from "framer-motion";
import { useRef } from "react";

const Support = () => {
  const animate1 = useRef(null);
  const isInView1 = useInView(animate1);

  return (
    <div className="container mx-auto my-20 p-4">
      <h3 ref={animate1}
        style={{
          opacity: isInView1 ? 1 : 0,
          transform: isInView1 ? "none":"translateX(-200px)",
          transition: "all 1.5s ease-in-out",
        }} className="text-4xl  leading-7  font-semibold text-center lg:text-left lg:ml-[170px]">
        Need Any Assistance
      </h3>
      <h3
        ref={animate1}
        style={{
          opacity: isInView1 ? 1 : 0,
          transform: isInView1 ? "none":"translateX(-200px)",
          transition: "all 1.5s ease-in-out",
        }}
        className="leading-7  font-semibold text-center lg:text-left lg:ml-[170px] md:text-2xl  my-4 text-gray-500 mb-12"
      >
        We Are Always Your Side When You Need
      </h3>
      <div className="lg:flex lg:gap-40 justify-center">
        <div className="flex lg:w-4/12 mb-4 bg-[#d1ecfd9d] px-10 lg:mb-0 h-[300px] shadow-main hover:shadow-main hover:shadow-[20px_60px_50px_] shadow-xl  rounded-sm duration-300">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/DMVbtbz/phone-icn.png"
              className="w-20 h-20"
              alt=""
            />
            <div>
              <h2>HAVE ANY DOUBTS?</h2>
              <p className="card-title">CALL US NOW</p>
              <p className=" text-gray-400">This Number is Toll Free</p>
              <p className=" text-gray-500">0000 - 123 - 455454789</p>
            </div>
          </div>
        </div>
        <div className="flex shadow-xl shadow-main hover:shadow-main bg-[#DFE7FD] lg:w-4/12 h-[300px] px-10 hover:shadow-[20px_60px_50px_]   rounded-sm duration-300 ">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/0ccvVwz/chat-icn.png"
              className="w-20 h-20"
              alt=""
            />
            <div>
              <h2>WANNA TALK TO US?</h2>
              <p className="card-title">LIVE CHAT NOW</p>
              <p className=" text-gray-500">
                You can connect with us 24/7 anytime on live chat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
