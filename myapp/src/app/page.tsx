"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "./components/Question";

interface Quiz {
  Title: string;
  Desc: string;
  Questions: Question[];
}

interface Question {
  Question: string;
  Answers: string[];
  CorrectIndex: number;
}

export default function Home() {
  const [data, setData] = useState<Quiz>();
  const [activeIndex, setActiveIndex] = useState(0);
  function getData() {
    axios.get("http://localhost:8080/").then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getData();
  }, []);
  if (!data) return <p>no data</p>;
  return (
    <div>
      {activeIndex} / {data.Questions.length}
      <p>{data.Title}</p>
      <p>{data.Desc}</p>
      <Question
        question={data.Questions[activeIndex].Question}
        answers={data.Questions[activeIndex].Answers}
        correctIndex={data.Questions[activeIndex].CorrectIndex}
        activeIndex={activeIndex}
        setActiveindex={setActiveIndex}
      />
    </div>
  );
}
