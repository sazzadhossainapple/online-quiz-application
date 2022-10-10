import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const SingleQuiz = ({ singleQuizQuestion }) => {
  const { question, options } = singleQuizQuestion;

  return (
    <div className="shadow-lg p-9 mb-9">
      <div>
        <div className="flex justify-end mb-6">
          <EyeIcon className="h-6 w-6 text-[#209CEE] " />
        </div>
        <h2 className=" text-2xl font-medium  mb-6 ">{question}</h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5">
        {options.map((question, index) => (
          <QuizQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
