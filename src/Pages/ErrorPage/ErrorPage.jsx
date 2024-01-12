import { Link, useRouteError } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex items-center justify-center  h-[65vh]">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <img src="https://i.ibb.co/NNZHsTK/404.gif" alt="" />
              <p className="mb-2 text-2xl font-bold text-center text-main md:text-3xl">
                <span className="text-main">Oops!</span> Page {error.statusText}
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link to="/">
                <button className="btn rounded-full hover:bg-[#ff8234] bg-[#ff8234] border-none   text-white">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
