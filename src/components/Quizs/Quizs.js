import React, { useContext } from "react";
import { QuizContext } from "../../layout/Main";
import Quiz from "../Quiz/Quiz";

const Quizs = () => {
  const allQuiz = useContext(QuizContext);

  return (
    <div className="my-10 lg:px-28 md:px-28 sm:px-10 px-10">
      <h1 className="text-4xl mb-10 font-bold text-center">All Quiz</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        {allQuiz.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quizs;
