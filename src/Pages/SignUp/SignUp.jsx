import { useContext, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Context } from "../../Components/AuthProvider/AuthProvider";

const SignUp = () => {
    const [showP, setShowp] = useState(false);
    const [error, setError] = useState('')
    const notify = () => toast.success('Sign Up Successful.', {
        style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
        },
        iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
        },
    });

    const { signWithGoogle, signUpUser, updateUserProfile, signOutUser } = useContext(Context);
    const handleShowP = () => {
        setShowp(!showP);
    };
    const handleGoogleSignin = () => {
        signWithGoogle()
            .then(() => {
                notify()
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
        const photoUrl = form.get('photoUrl')
        const email = form.get("email");
        const password = form.get("password");


        if (password.length < 6) {
            return setError('Password should be at least 6 characters long.');
        } else if (!/[@#$%^&*()_+-=]/.test(password) || !/[A-Z]/.test(password)) {
            return setError('Your password should contain at least one uppercase letter and  one special character.');
        }

        signUpUser(email, password)
            .then((result) => {
                e.target.reset();
                console.log(result);
                setError('')
                notify()
                updateUserProfile(name, photoUrl)
                    .then(result => {
                        console.log(result)
                        signOutUser()
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                setError(error.message);
            })
    };
    return (
        <div className="bg-[url('https://i.ibb.co/LZhwJ1T/workplace-business-modern-male-accessories-laptop-black-background-1.jpg')]   h-screen bg-cover bg-no-repeat   ">
            <Navbar></Navbar>
            <div>
                <div data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="1000"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="right"
                    className="hero min-h-[80vh]">
                    <div className="hero-content flex-col gap-8">
                        <h1 className="text-5xl font-bold text-white">Sign Up now!</h1>
                        <div className="card  w-96   backdrop-blur-3xl bg-transparent pt-3">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="your name"
                                            className="input bg-transparent text-white input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Photo url</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="photoUrl"
                                            placeholder="photo url"
                                            className="input bg-transparent text-white input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input
                                            type="emil"
                                            name="email"
                                            placeholder="email"
                                            className="input bg-transparent text-white input-bordered"
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
                                                className="input bg-transparent text-white input-bordered"
                                                required
                                            />
                                            <div className="my-1 text-red-400 font-medium">
                                                {
                                                    error && <p>{error}</p>
                                                }
                                            </div>
                                            <span
                                                className="absolute top-4 right-2"
                                                onClick={handleShowP}
                                            >
                                                {showP ? <GoEye /> : <GoEyeClosed />}
                                            </span>
                                        </div>
                                        <label className="label">
                                            <a href="#" className="label-text-alt text-gray-300 link link-hover">
                                                Forgot password?
                                            </a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn hover:bg-[#ff8234] bg-[#ff8234] border-none bg-opacity-80 font-semibold text-white">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <p className="my-4 text-gray-300">
                                        Do not have a account ? :{" "}
                                        <Link to={"/signIn"} className=" font-bold text-[#ff8234]">
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                                <button
                                    onClick={handleGoogleSignin}
                                    className="btn z-50 hover:bg-transparent w-full bg-transparent text-gray-300 font-semibold mb-3"
                                >
                                    <FcGoogle></FcGoogle>
                                    Sign Up With Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;
