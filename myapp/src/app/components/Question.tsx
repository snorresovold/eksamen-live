"use client";
import React, { use, useEffect, useState } from "react";

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
  const [rigth, setRight] = useState<boolean>();
  const [wrong, setWrong] = useState<boolean>();

  useEffect(() => {
    setRight(false);
    setWrong(false);
  }, [activeIndex]);

  function check(i: number) {
    if (i == correctIndex) {
      setRight(true);
      setWrong(false);
    } else {
      setWrong(true);
      setRight(false);
    }
  }
  return (
    <div>
      {question}
      {answers.map((answer, i) => (
        <p onClick={() => check(i)}>{answer}</p>
      ))}
      {rigth ? <p>correct answer</p> : <></>}
      {wrong ? <p>wrong answer</p> : <></>}
      {rigth ? (
        <p onClick={() => setActiveindex(activeIndex + 1)}>Next question</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Question;
