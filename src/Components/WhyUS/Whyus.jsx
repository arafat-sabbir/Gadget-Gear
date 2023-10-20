import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
    AOS.init();
    return (
        <div>
            <div className="flex  items-center justify-center">
                <div className="badge mb-12 badge-success badge-sm"></div>
                <p className="text-5x mb-12  font-semibold  ml-2">Why Choose us</p>
            </div>
            <div className="container mx-auto items-center flex flex-col lg:flex-row gap-20 lg:gap-4 ">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1500"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="right"
                    className="w-1/2 ">
                    <h3 className="lg:text-5xl text-3xl font-semibold my-8 ">Providing Reliable Gadget To Our customer Since From the beginning..</h3>
                    <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
                        <div className="badge badge-success badge-sm"></div>
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">Fast Delivery service</h1>
                            <p className="text-xl">At GadgetGlade we specialize in Fast delivery service <br /> giving out customer the product as soon as possible.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
                        <div className="badge badge-success badge-sm"></div>
                        <div>
                        <h1 className="text-2xl mb-2 font-medium">Best After Sales Service</h1>
                        <p className="text-xl">At GadgetGlade we Provide Customer a great After sales service <br />So the customer can you products without worry.</p>
                        </div>
                    </div>
                   

                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="2000"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="left"
                    className="w-1/2 my-12 lg:my-auto ">
                    <img src="https://i.ibb.co/SNvh6rT/banner.jpg" className="mx-auto" alt="" />
                </div>

            </div>
        </div>
    );
};

export default WhyUs;