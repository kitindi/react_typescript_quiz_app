import { useState, useEffect } from "react";
import { questions } from "../../data/questions";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [lock, setLock] = useState(false);
  const [correct, setCorrect] = useState(0);

  const checkAnswer = (e, index) => {
    // console.log(index);
    if (lock === false) {
      if (question.answer === index) {
        e.target.classList.add("bg-green-400");
        setLock(true);
      } else {
        e.target.classList.add("bg-red-400");
        setLock(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (index < questions.length - 1) {
      if (lock) {
        setIndex((index) => index + 1);
        setQuestion(questions[index]);
        setLock(false);
      }
    } else {
      console.log("end");
    }
  };

  return (
    <div className="container w-full max-w-2xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-5"> Memory and storage </h1>

      <div className=" p-3 ">
        <h3 className="text-md font-normal mb-4">
          {" "}
          <span className="text-bold h-2 w-16 p-2 mr-3 bg-black text-white">{index + 1}</span>
          {question.question}
        </h3>

        <ul className="flex flex-col space-y-3">
          {question.options.map((option, index) => (
            <li
              className={`text-sm p-3 border border-slate-300 rounded-md cursor-pointer`}
              key={index}
              onClick={(e) => {
                checkAnswer(e, index);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className="py-3 flex items-center justify-end">
          <button className="px-12 py-2 rounded-md bg-[#2dcca5]" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
        <div>
          {index + 1} out of {questions.length}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
