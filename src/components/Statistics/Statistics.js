import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { QuizContext } from "../../layout/Main";

const Statistics = () => {
  const totalQuiz = useContext(QuizContext);

  return (
    <div className=" md:px-28 sm:pr-10 pr-10 lg:my-16 md:my-10 sm:my-8 my-8">
      <h1 className="md:text-4xl sm:text-2xl lg:mb-10 md:mb-10 sm:mb-6 mb-6  font-bold text-center">
        Total Quiz <span className="text-[#209CEE]">Chart</span>
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart width={400} height={300} data={totalQuiz}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#209CEE" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
