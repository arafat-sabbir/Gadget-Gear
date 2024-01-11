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
      <div className="h-screen my-auto w-screen mx-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-semibold leading-3 tracking-widest">
            Welcome Back
          </h1>
          <div className="card  w-1/3   pt-3  bg-transparent">
            <div className="card-body">
              <form onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="emil"
                    name="email"
                    placeholder="Email"
                    className="input rounded-sm bg-transparent text-white border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
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
                      placeholder="Password"
                      className="input rounded-sm bg-transparent text-white border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                      required
                    />
                    <span
                      className="absolute top-4 text-black cursor-pointer right-2"
                      onClick={handleShowP}
                    >
                      {showP ? <GoEye /> : <GoEyeClosed />}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="border font-semibold  py-2 rounded-sm border-gray-500"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="my-1 text-red-400 font-medium">
                {error && <p>Error : {error}</p>}
                <p className="my-4 text-black">
                  Do not have a account ? :{" "}
                  <Link to={"/signUp"} className=" font-bold text-[#FF8234]">
                    Sign Up
                  </Link>
                </p>
              </div>
              <button onClick={handleGoogleSignin} className="">
                <span className="flex justify-center items-center gap-6 text-xl border py-2 border-gray-500 rounded-sm">
                  <FcGoogle></FcGoogle>Sign In With Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {user && (
        <Navigate to={location?.state ? location.state : "/"}></Navigate>
      )}
    </>
  );
};

export default SignIn;
