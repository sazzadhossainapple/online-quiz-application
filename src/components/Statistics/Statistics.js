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
  BarChart,
  Bar,
} from "recharts";
import { QuizContext } from "../../layout/Main";

const Statistics = () => {
  const totalQuiz = useContext(QuizContext);
  console.log(totalQuiz);

  return (
    <div className="lg:px-28 md:px-28 sm:px-10 px-10 my-20">
      <h1 className="text-4xl mb-10 font-bold text-center">Total Quiz Chart</h1>

      <div className="flex justify-center items-center">
        <LineChart width={500} height={300} data={totalQuiz}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
