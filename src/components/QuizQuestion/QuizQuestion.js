import React from "react";

const QuizQuestion = ({ question, handleRadioValueChange }) => {
  return (
    <div>
      <label className="flex border p-5 ">
        <input
          onChange={handleRadioValueChange}
          value={question}
          type="radio"
          name="radio-2"
          className="radio border-[#209CEE] checked:bg-[#209CEE] mr-2"
        />
        {question}
      </label>
    </div>
  );
};

export default QuizQuestion;
