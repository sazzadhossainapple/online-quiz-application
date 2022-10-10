import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetails = () => {
  const quizLoadData = useLoaderData();
  const quizDetails = quizLoadData.data;
  const { name } = quizDetails;

  return (
    <div className="w-3/4 mx-auto my-16">
      <h1 className="text-4xl mb-10 font-bold text-center">
        Quiz of <span className="text-[#209CEE]">{name}</span>
      </h1>
      <div>
        <SingleQuiz quizDetails={quizDetails} />
      </div>
    </div>
  );
};

export default QuizDetails;
