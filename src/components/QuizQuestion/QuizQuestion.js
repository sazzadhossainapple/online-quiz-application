import React from "react";

const QuizQuestion = ({ question }) => {
  return (
    <div className="flex  border p-5 items-center">
      <input
        type="radio"
        name="radio-2"
        className="radio border-[#209CEE] checked:bg-[#209CEE]"
      />
      <h1 className="ml-2">{question.split("<p>")}</h1>
    </div>
  );
};

export default QuizQuestion;
