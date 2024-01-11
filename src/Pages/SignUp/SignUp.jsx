import { useContext, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "../../Components/AuthProvider/AuthProvider";

const SignUp = () => {
  const correctPassPatern = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  const [showP, setShowp] = useState(false);
  const [error, setError] = useState("");
  const notify = () =>
    toast.success("Sign Up Successful.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });

  const { signWithGoogle, signUpUser, updateUserProfile, signOutUser } =
    useContext(Context);
  const handleShowP = () => {
    setShowp(!showP);
  };
  const handleGoogleSignin = () => {
    signWithGoogle()
      .then(() => {
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  AOS.init();
  const handleSubmit = (e) => {
    e.preventDefault();
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
        console.log(result);
        setError("");
        notify();
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
     <div className="flex justify-center items-center h-full">
     <div className="card backdrop-blur-3xl  w-1/3 bg-transparent pt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input rounded-sm bg-transparent text-white border border-black focus:ring-0 focus:outline-none focus:border-main"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Photo url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
                  className="input rounded-sm  bg-transparent text-white border border-black focus:ring-0 focus:outline-none focus:border-main"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="emil"
                  name="email"
                  placeholder="email"
                  className="input rounded-sm  bg-transparent text-white border border-black focus:ring-0 focus:outline-none focus:border-main"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className="form-control relative">
                  <input
                    type={showP ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input rounded-sm bg-transparent text-white border border-black focus:ring-0 focus:outline-none focus:border-main"
                    required
                  />
                  <div className="my-1 text-red-400 font-medium">
                    {error && <p>{error}</p>}
                  </div>
                  <span
                    className="absolute top-4 right-2"
                    onClick={handleShowP}
                  >
                    {showP ? <GoEye /> : <GoEyeClosed />}
                  </span>
                </div>
              </div>
            </div>
            <label className="flex justify-center my-2 w-full">
              <a
                href="#"
                className="label-text-alt  text-gray-300 link link-hover"
              >
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button className="btn  hover:bg-[#ff8234bd] bg-[#ff8234bd] border-none bg-opacity-80 font-semibold text-white">
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className="my-4  text-gray-300">
              Do not have a account ? please :{" "}
              <Link to={"/signIn"} className=" font-bold text-main">
                Sign In
              </Link>
            </p>
          </div>
          <button
            onClick={handleGoogleSignin}
            className=""
          >
            <span className="flex justify-center items-center gap-6 text-xl"><FcGoogle></FcGoogle>Sign Up With Google</span>
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default SignUp;
