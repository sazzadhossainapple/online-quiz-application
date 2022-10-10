import React from "react";
import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  console.log(quiz);
  const { id, name, logo, total } = quiz;
  return (
    <div className="w-full rounded-md shadow-md text-black ">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md  bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="">
            Total Questions: <span>{total}</span>
          </p>
        </div>
        <Link
          to={`../quiz/${id}`}
          className="btn mt-4 w-full bg-[#209CEE] border-[#209CEE] hover:bg-[#187cbf] hover:border-[#187cbf]"
        >
          Start Quiz
          <ArrowSmallRightIcon className="ml-1 h-5 w-5 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
