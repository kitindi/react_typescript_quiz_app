import { useState, useRef } from "react";
import { questions } from "../../data/questions";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [show, setShow] = useState(false);

  const [lock, setLock] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

  const checkAnswer = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // console.log(index);
    if (lock === false) {
      const target = e.target as HTMLElement; // Type assertion

      if (question.answer === index) {
        target.classList.add("bg-green-400");
        setCorrectAnswerCount((count) => count + 1);

        setLock(true);
      } else {
        target.classList.add("bg-red-400");

        setLock(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (index < questions.length - 1) {
      if (lock) {
        // Clear styles from all list items
        if (listRef.current) {
          const listItems = listRef.current.querySelectorAll("li");
          listItems.forEach((item) => {
            // Assert that item is an HTMLElement
            const element = item as HTMLElement;
            element.classList.remove("bg-green-400", "bg-red-400");
          });
        }

        // Move to the next question
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(questions[index + 1]); // Use index + 1 to get the next question
        setLock(false);
      }
    } else {
      setShow(true);
    }
  };

  const repeatTest = () => {
    window.location.reload();
  };

  return (
    <div className="container w-full max-w-4xl mx-auto px-10">
      <div className="w-full max-w-2xl mx-auto flex justify-between items-center p-4">
        <div></div>
        {show && (
          <div>
            {" "}
            <h2 className="text-indigo-700 mb-2 font-medium">Congratutaions</h2>
            <p className="text-indigo-600">
              Your score : <span className="font-bold">{(correctAnswerCount / questions.length) * 100} %</span>
            </p>
          </div>
        )}
      </div>

      <div className="w-full max-w-2xl mx-auto p-3 ">
        <h3 className="text-md font-semibold mb-4">
          {" "}
          <span className="text-bold h-2 w-16 p-2 mr-1">{index + 1}.</span>
          {question.question}
        </h3>

        <ul className="flex flex-col space-y-3" ref={listRef}>
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
        <div className="py-3 flex items-center justify-between">
          <div>
            {index + 1} out of {questions.length}
          </div>
          <div className="flex items-center space-x-4 py-5">
            {show ? (
              <button className="px-8 py-2 rounded-md bg-black  text-white text-sm" onClick={repeatTest}>
                Retake
              </button>
            ) : (
              <button className="px-8 py-2 rounded-md bg-indigo-600 text-sm text-white" onClick={handleNextQuestion}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
