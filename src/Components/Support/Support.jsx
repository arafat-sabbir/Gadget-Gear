const Support = () => {
    return (
        <div className="container mx-auto my-20 p-4">
            <h3 className="text-4xl font-semibold text-center">WELCOME TO GADGETGLADE SUPPORT. WE'RE HERE TO HELP.</h3>
            <h3 className="text-2xl font-semibold text-center my-4 text-gray-400 mb-12">ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</h3>
           <div className="lg:flex lg:gap-40 justify-center">
           <div className="flex lg:w-4/12 mb-4 lg:mb-0 h-[300px] bg-base-100 border-2 hover:border-b-[#ff8234] rounded-2xl">
                <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/DMVbtbz/phone-icn.png" className="w-20 h-20" alt="" />
                <div>
                <h2>HAVE ANY DOUBTS?</h2>
                    <p className="card-title">CALL US NOW</p>
                    <p className="text-xl text-gray-400">This Number is Toll Free</p>
                    <p className="text-xl text-gray-500">0000 - 123 - 455454789</p>
                </div>
                </div>
            </div>
            <div className="flex lg:w-4/12 h-[300px] bg-base-100 border-2 hover:border-b-[#ff8234] rounded-2xl">
                <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/0ccvVwz/chat-icn.png" className="w-20 h-20" alt="" />
                <div>
                <h2>WANNA TALK TO US?</h2>
                    <p className="card-title">LIVE CHAT NOW</p>
                    <p className="text-xl text-gray-500">You can connect with us 24/7 anytime on live chat</p>
                </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default Support;