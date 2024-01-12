import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const animate1 = useRef(null)
  const isInView1 = useInView(animate1)
  const animate2 = useRef(null)
  const isInView2 = useInView(animate2)
  return (
    <div className="container mx-auto">
      <p ref={animate1} style={{
        opacity: isInView1? 1 : 0,
        transform: isInView1? "translateY(0px)" : "translateX(-300px)",
        transition: "all 1.5s ease-in-out",
      }} className="lg:text-left lg:ml-14 lg:-mb-10 text-center text-4xl font-semibold tracking-widest text-main">
        Why Choose us
      </p>
      <div ref={animate2} style={{
        opacity: isInView2? 1 : 0,
        transform: isInView2? "translateY(0px)" : "translateY(200px)",
        transition: "all 1.5s ease-in-out",
      }} className=" items-center flex flex-col lg:flex-row gap-20 lg:gap-4 ">
        <div className="text-center lg:text-left w-[98vw] lg:w-1/2 mx-auto">
          <h3 className="lg:text-4xl leading-10 tracking-widest text-xl  font-semibold mt-8 mb-4  ">
            Providing Reliable Gadget To Our customer Since From the beginning..
          </h3>
          <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
            <div className="badge badge-success badge-sm"></div>
            <div>
              <h1 className="text-xl mb-2 font-medium">
                Fast Delivery service
              </h1>
              <p className="text-lg">
                At GadgetGlade we specialize in Fast delivery service giving out
                customer the product as soon as possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
            <div className="badge badge-success badge-sm"></div>
            <div>
              <h1 className="text-xl mb-2 font-medium">
                Best After Sales Service
              </h1>
              <p className="text-lg">
                At GadgetGlade we Provide Customer a great After sales service{" "}
                So the customer can you products without worry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-5/12 my-12 lg:my-auto ">
          <img
            src="https://i.ibb.co/SNvh6rT/banner.jpg"
            className="mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
