import AOS from "aos";
import "aos/dist/aos.css";

const Support = () => {
  AOS.init();
  return (
    <div className="container mx-auto my-20 p-4">
      <h3 className="lg:text-4xl md:text-xl leading-7  font-semibold text-center dark:text-red-500">
        WELCOME TO GADGETGLADE SUPPORT. WE'RE HERE TO HELP.
      </h3>
      <h3 className="md:text-2xl font-semibold text-center my-4 text-gray-500 mb-12">
        ALWAYS ON YOUR SIDE WHEN YOU NEED HELP
      </h3>
      <div className="lg:flex lg:gap-40 justify-center">
        <div className="flex lg:w-4/12 mb-4 bg-[#d1ecfd9d] px-10 lg:mb-0 h-[300px] hover:shadow-[0_0_70px_]   rounded-sm duration-300">
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
        <div className="flex bg-[#DFE7FD] lg:w-4/12 h-[300px] px-10 hover:shadow-[0_0_70px_]   rounded-sm duration-300 ">
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
