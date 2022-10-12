import React from "react";

const QuizQuestion = ({ question, handleRadioValueChange }) => {
  return (
    <label className="flex items-center border p-5">
      <input
        onChange={handleRadioValueChange}
        value={question}
        type="radio"
        name={question}
        className="radio border-[#209CEE] checked:bg-[#209CEE] mr-2"
      />
      {question}
    </label>
  );
};

export default QuizQuestion;
