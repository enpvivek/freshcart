import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-screen z-50  p-6 px-16">
      {/* for Desktop and Tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-8 object-cover" src={Logo} alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex ml-auto gap-8 items-center">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center ">
            <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            alt="userProfile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>
      {/* for Mobile Users  */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
