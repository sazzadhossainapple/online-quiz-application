import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export const QuizContext = createContext([]);

const Main = () => {
  const quizAllLoadData = useLoaderData();
  const allQuiz = quizAllLoadData.data;

  return (
    <QuizContext.Provider value={allQuiz}>
      <NavBar />
      <Outlet />
    </QuizContext.Provider>
  );
};

export default Main;
