import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../Utility/Hooks/UseAuth/useAuth";
import { IoHomeOutline } from "react-icons/io5";
import GoogleSignIn from "../../Utility/GoogleSignIn/GoogleSignIn";

const SignUp = () => {
  // Regex Pattern For Validation Passwords
  const correctPassPatern = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  const navigate = useNavigate();
  const location = useLocation();
  const [showP, setShowp] = useState(false);
  const [error, setError] = useState("");
  // Get the Auth related Function From Use Auth Hooks
  const { signWithGoogle, signUpUser, updateUserProfile, signOutUser } =
    useAuth();
  const handleShowP = () => {
    setShowp(!showP);
  };
  // const handleGoogleSignin = () => {
  //   const toastId = toast.loading("Sign In Processing...");
  //   signWithGoogle()
  //     .then(() => {
  //       toast.success("Signed In Successfully", { id: toastId });

  //       navigate(location.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message, { id: toastId });
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const toast = toast.loading("Signing Up...");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return setError("Password should be at least 6 characters long.");
    } else if (!correctPassPatern.test(password)) {
      return setError(
        "Your password should contain at least one uppercase letter and One Special Character ."
      );
    }

    signUpUser(email, password)
      .then((result) => {
        e.target.reset();
        toast.success("Sign Up Successfull.");
        setError("");
        navigate(location.state ? location.state : "/");
        updateUserProfile(name, photoUrl)
          .then((result) => {
            console.log(result);
            signOutUser();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="h-screen my-auto w-screen mx-auto">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-semibold leading-3 tracking-widest">
          Sign Up Now
        </h1>
        <Link to={'/'} className="text-xl font-semibold absolute  left-72 top-10"> <span className="flex  gap-2 hover:text-main duration-300 transition-all justify-center items-center">  <IoHomeOutline size={26}/> Go Home</span> </Link>
        <div className="card  lg:w-1/3 bg-transparent pt-3">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black">Photo url</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo url"
                    className="input rounded-sm  bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="emil"
                    name="email"
                    placeholder="Email"
                    className="input rounded-sm  bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <div className="form-control relative">
                    <input
                      type={showP ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                      required
                    />
                    <div className="my-1 text-red-400 font-medium">
                      {error && <p>{error}</p>}
                    </div>
                    <span
                      className="absolute top-4 right-2 cursor-pointer"
                      onClick={handleShowP}
                    >
                      {showP ? <GoEye /> : <GoEyeClosed />}
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="border font-semibold  py-2 rounded-sm border-gray-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div>
              <p className="my-4  text-black font-medium">
                Do not have a account ? please :{" "}
                <Link to={"/signIn"} className=" font-bold text-main">
                  Sign In
                </Link>
              </p>
            </div>
            <GoogleSignIn></GoogleSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
