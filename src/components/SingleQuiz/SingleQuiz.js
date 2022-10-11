import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const SingleQuiz = ({ singleQuizQuestion, index }) => {
  const { question, options, correctAnswer } = singleQuizQuestion;

  const handleRadioValueChange = (e) => {
    const questionValue = e.target.value;
    console.log(correctAnswer);
    if (questionValue === correctAnswer) {
      toast.success("You slected correct answer");
    } else {
      console.log("wrong");
      toast.warning("You slected worng answer");
    }
  };

  const correctHandler = () => {
    toast.success(`Answer : ${correctAnswer}`);
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
          <span>Quiz {index}</span>:{question}
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
