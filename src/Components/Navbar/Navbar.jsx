import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../AuthProvider/AuthProvider";
import { BsCart2 } from 'react-icons/bs';

const Navbar = () => {
  const { user, signOutUser } = useContext(Context)
  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li >
        <NavLink to={"/myCart"}> My <span className="text-xl"><BsCart2></BsCart2></span></NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  z-50 justify-center mb-4 py-6 text-[#fc8135] container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-semibold mx-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className=" hidden lg:flex text-[#ff8234] font-bold items-center">
          <img className="w-22 h-14" src="https://i.ibb.co/cX1h7zZ/2358045-removebg.png" alt="" />
          <p className="text-2xl  font-semibold">GearGlade</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-semibold gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && <p className="font-semibold  mr-2 ">{user.displayName}</p>
        }
        {
          user && <img className="w-12 mr-4 h-12  rounded-full border-2 border-[#f7897d]" src={user?.photoURL ? user.photoURL : ''} alt="" />
        }
        {user ? (
          <button className="btn hover:bg-[#ff8234e5] bg-[#ff8234e1] border-none rounded-full text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to={"/signIn "} className="btn rounded-full hover:bg-[#ff8234e8] bg-[#ff8234f3] border-none  w-24  text-white">
            Login
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;
