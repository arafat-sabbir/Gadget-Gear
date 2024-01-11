import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/UseAuth/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleSignIn = () => {
  const { signWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = () => {
    const toastId = toast.loading("Sign In Processing...");
    signWithGoogle()
      .then((res) => {
        const userData = {
          userEmail: res.user.email,
          userPhoto: res.user.photoURL,
          userName: res.user.displayName,
          userRole: "user",
        };
        axios.post("http://localhost:5001/createUser", userData)
        .then(res=>{
          console.log(res.data);
        })
        toast.success("Signed In Successfully", { id: toastId });

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };
  return (
    <button onClick={handleGoogleSignIn} className="">
      <span className="flex justify-center items-center gap-6 text-xl border py-2 border-gray-500 rounded-sm">
        <FcGoogle></FcGoogle>Sign Up With Google
      </span>
    </button>
  );
};

export default GoogleSignIn;
