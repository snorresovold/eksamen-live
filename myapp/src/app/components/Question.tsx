"use client";
import { useState, useEffect } from "react";

interface input {
  question: string;
  answers: Array<string>;
  correctIndex: number;
  activeIndex: number;
  setActiveindex: (arg0: number) => void;
}

function Question({
  question,
  answers,
  correctIndex,
  activeIndex,
  setActiveindex,
}: input) {
  const [correct, setCorrect] = useState<Boolean>();
  const [wrong, setWrong] = useState<Boolean>();

  function check(i: number) {
    if (i == correctIndex) {
      setCorrect(true);
      setWrong(false);
    } else {
      setCorrect(false);
      setWrong(true);
    }
  }

  useEffect(() => {
    setWrong(false);
    setCorrect(false);
  }, [activeIndex]);
  return (
    <div>
      <p>{question}</p>
      {answers.map((answer: string, i: number) => (
        <p onClick={() => check(i)}>{answer}</p>
      ))}
      {correct ? <p>Correct answer</p> : <></>}
      {correct ? (
        <button onClick={() => setActiveindex(activeIndex + 1)}>
          Next question
        </button>
      ) : (
        <></>
      )}
      {wrong ? <p>Wrong answer</p> : <></>}
    </div>
  );
}

export default Question;
