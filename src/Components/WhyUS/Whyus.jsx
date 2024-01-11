import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  AOS.init();
  return (
    <div>
      <div className="flex  items-center justify-center ">
        <p className="lg:text-5xl text-3xl font-semibold tracking-widest text-main ">Why Choose us</p>
      </div>
      <div className="container mx-auto items-center flex flex-col lg:flex-row gap-20 lg:gap-4 ">
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
                At GadgetGlade we specialize in Fast delivery service 
                giving out customer the product as soon as possible.
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
        <div className="w-1/2 my-12 lg:my-auto ">
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
