import React from "react";
import { Link } from "react-router-dom";
import Images from "../../images/header.jpg";
const Header = () => {
  return (
    <div className=" relative w-full h-[80vh]   bg-gradient-to-r from-stone-900 to-stone-700 flex items-center ">
      <img
        src={Images}
        className="w-full h-[80vh]  object-cover absolute mix-blend-overlay"
        alt=""
      />
      <div className="lg:px-28 md:px-28 sm:px-10 px-10 flex z-40">
        <div className="text-white">
          <h2 className=" text-2xl">
            Welcome To
            <span className="text-[#209CEE]"> Primo Quiz</span>
          </h2>
          <h1 className=" lg:text-7xl md:text-6xl sm:text-4xl text-4xl   font-bold my-5">
            Let's Start The Quiz
          </h1>
          <Link
            to="/blog"
            className="btn mt-4 bg-[#209CEE] border-[#209CEE] hover:bg-[#187cbf] hover:border-[#187cbf]"
          >
            See Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
