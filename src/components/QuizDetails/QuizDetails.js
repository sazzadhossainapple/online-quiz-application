import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetails = () => {
  const quizLoadData = useLoaderData();
  const quizDetails = quizLoadData.data;
  const { name, questions } = quizDetails;

  return (
    <div className="lg:w-3/4 lg:px-0 md:px-28 sm:px-10 px-10 mx-auto my-16">
      <h1 className="text-4xl mb-10 font-bold text-center">
        Quiz of <span className="text-[#209CEE]">{name}</span>
      </h1>
      <div>
        {questions.map((singleQuizQuestion) => (
          <SingleQuiz
            key={singleQuizQuestion.id}
            singleQuizQuestion={singleQuizQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
