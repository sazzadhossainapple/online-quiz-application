import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const SingleQuiz = ({ singleQuizQuestion, index }) => {
  const { question, options, correctAnswer } = singleQuizQuestion;

  const handleRadioValueChange = (e) => {
    const questionValue = e.target.value;
    if (questionValue === correctAnswer) {
      toast.success("You slected the correct answer", { autoClose: 1500 });
    } else {
      toast.error("You slected the wrong answer", { autoClose: 1500 });
    }
  };

  const correctHandler = () => {
    toast.success(` Correct Answer : ${correctAnswer}`, { autoClose: 1500 });
  };

  return (
    <div className="shadow-lg p-9 mb-9">
      <div>
        <div className="flex justify-end mb-6">
          <EyeIcon
            onClick={correctHandler}
            className="h-6 w-6 text-[#209CEE] cursor-pointer "
          />
        </div>
        <h2 className=" text-2xl font-medium  mb-6 ">
          <span>Quiz {index}</span>: {question}
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5">
        {options.map((question, indx) => (
          <QuizQuestion
            key={indx}
            question={question}
            handleRadioValueChange={handleRadioValueChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
