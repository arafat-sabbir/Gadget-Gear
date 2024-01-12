import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const animate1 = useRef(null);
  const isInView1 = useInView(animate1);
  const animate2 = useRef(null);
  const isInView2 = useInView(animate2);
  const animate3 = useRef(null);
  const isInView3 = useInView(animate3);
  const animate4 = useRef(null);
  const isInView4 = useInView(animate4);
  
  return (
    <div  className="container mx-auto mb-28 p-4">
      <h3 ref={animate4} style={{
      opacity: isInView4? 1 : 0,
      transform: isInView4? "translateY(0px)" : "translateX(-300px)",
      transition: "all 1.5s ease-in-out",

    }} className="text-3xl lg:ml-9  tracking-widest my-20 text-center lg:text-left font-semibold   text-main">
        Newly Arrived
      </h3>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:gap-20 gap-10 lg:gap-20">
        <div
          ref={animate1}
          style={{
            transform: isInView1 ? "none" : "translateX(-200px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 1.5s ease-in-out",
          }}
          className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
        >
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/bQ8c0kY/mockup-free-ikg-P7-AQs2r4-unsplash.jpg)",
            }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Iphone 15 Pro Max
            </h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">
                $1100
              </span>
              <Link to={"details/6531212b9d68e899a4f3c841"}>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={animate2}
          style={{
            transform: isInView2 ? "none" : "translateY(200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 1.5s ease-in-out",
          }}
          className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
        >
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/PGsLHQ7/samuel-angor-d-OHDjkz7-X3k-unsplash.jpg)",
            }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Pixel 8 Pro
            </h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">
                $829
              </span>
              <Link to={"details/653152659d68e899a4f3c858"}>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={animate3}
          style={{
            transform: isInView3 ? "none" : "translateX(200px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.5s ease-in-out",
          }}
          className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
        >
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/6tfhpbh/emiliano-cicero-OKZqs-Vseko-unsplash.jpg)",
            }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Pixel Watch 2
            </h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">
                $390
              </span>
              <Link to={"/details/65311fcb9d68e899a4f3c83f"}>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
