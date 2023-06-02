"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "./components/Question";

export interface Quiz {
  Title: string;
  Desc: string;
  Questions: Question[];
}

export interface Question {
  Question: string;
  Answers: string[];
  CorrectIndex: number;
}

export default function Home() {
  const [quiz, setQuiz] = useState<Quiz>();
  const [activeIndex, setActiveindex] = useState(0);
  function getQuiz() {
    axios.get("http://localhost:8080/").then((response) => {
      console.log(response.data);
      setQuiz(response.data);
    });
  }
  useEffect(() => {
    getQuiz();
  }, []);
  if (!quiz) return <p>no data yet</p>;
  return (
    <div>
      <p>eksamen</p>
      <p>{quiz.Title}</p>
      <p>{quiz.Desc}</p>
      {activeIndex} / {quiz.Questions.length}
      <Question
        question={quiz.Questions[activeIndex].Question}
        answers={quiz.Questions[activeIndex].Answers}
        correctIndex={quiz.Questions[activeIndex].CorrectIndex}
        activeIndex={activeIndex}
        setActiveindex={setActiveindex}
      />
    </div>
  );
}
