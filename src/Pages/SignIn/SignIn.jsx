import { useContext, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../../Components/AuthProvider/AuthProvider";

const SignIn = () => {
  const { signWithGoogle, user, signInUser } = useContext(Context);
  const [showP, setShowp] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        swal("Great!", "Sign In SuccessFully", "success");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Password doesn't match");
        } else if (error.code === "auth/user-not-found") {
          setError("Email doesn't match");
        } else {
          setError(error.message);
        }
      });
  };
  const handleShowP = () => {
    setShowp(!showP);
  };
  const handleGoogleSignin = () => {
    signWithGoogle()
      .then(() => {
        swal("Great!", "Sign In SuccessFully", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  AOS.init();
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="right"
          className="hero min-h-[80vh]"
        >
          <div className="hero-content flex-col gap-8">
            <h1 className="text-5xl font-bold text-[#FF8234]">Sign In now!</h1>
            <div className="card  w-96   pt-3 backdrop-blur-3xl bg-transparent">
              <div className="card-body">
                <form onSubmit={handleSignIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="emil"
                      name="email"
                      placeholder="email"
                      className="input border border-[#ff823485] bg-transparent text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <div className="form-control relative">
                      <input
                        type={showP ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input border border-[#ff823485] bg-transparent text-white"
                        required
                      />
                      <span
                        className="absolute top-4 text-gray-200 right-2"
                        onClick={handleShowP}
                      >
                        {showP ? <GoEye /> : <GoEyeClosed />}
                      </span>
                    </div>
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt text-gray-300 link link-hover"
                      >
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn hover:bg-[#ff8234bd] bg-[#ff8234bd] border-none bg-opacity-80 font-semibold text-gray-200">
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="my-1 text-red-400 font-medium">
                  {error && <p>Error : {error}</p>}
                  <p className="my-4 text-gray-300">
                    Do not have a account ? :{" "}
                    <Link to={"/signUp"} className=" font-bold text-[#FF8234]">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <button
                  onClick={handleGoogleSignin}
                  className="btn z-50 border hover:border-[#ff823485] border-[#ff823485] hover:bg-transparent w-full bg-transparent text-gray-300 font-semibold mb-3"
                >
                  <FcGoogle></FcGoogle>
                  Sign IN With Google
                </button>
              </div>
            </div>
          </div>
          {user && (
            <Navigate to={location?.state ? location.state : "/"}></Navigate>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
