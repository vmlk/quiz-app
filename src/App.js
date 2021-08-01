import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Lucknow", isCorrect: false },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Chandigarh", isCorrect: false },
      ],
    },
    {
      questionText: "What is the national animal of India?",
      answerOptions: [
        { answerText: "Lion", isCorrect: false },
        { answerText: "Tiger", isCorrect: true },
        { answerText: "Cow", isCorrect: false },
        { answerText: "Elephant", isCorrect: false },
      ],
    },
    {
      questionText: "What is the national flower of India?",
      answerOptions: [
        { answerText: "Rose", isCorrect: false },
        { answerText: "Lotus", isCorrect: true },
        { answerText: "Sunflower", isCorrect: false },
        { answerText: "Tulip", isCorrect: false },
      ],
    },
    {
      questionText: "What is the national game of India?",
      answerOptions: [
        { answerText: "Cricket", isCorrect: false },
        { answerText: "Basketball", isCorrect: false },
        { answerText: "Footbal", isCorrect: false },
        { answerText: "Hockey", isCorrect: true },
      ],
    },
  ];

  const handleButton = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    isCorrect && setScore(score + 1);
  };

  return (
    <div className="App">
      {!showScore && (
        <div className="app__container">
          <div className="question__container">
            <h2 className="question__text">
              {questions[currentQuestion].questionText}
            </h2>
          </div>
          <div className="second__container">
            <div className="question__tracker">
              <p>Question</p>
              <h1>
                {currentQuestion + 1}/{questions.length}
              </h1>
            </div>
            <div className="question__option">
              {questions[currentQuestion].answerOptions.map((answerTexts) => {
                return (
                  <button
                    className="answer__btn"
                    onClick={() => handleButton(answerTexts.isCorrect)}
                  >
                    {answerTexts.answerText}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {showScore && (
        <div className="app__container">
          <h1 className="score">
            You scored <span>{score}</span> out of {questions.length}
          </h1>
          <button
            className="answer__btn"
            onClick={() => window.location.reload()}
          >
            Reattempt
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
