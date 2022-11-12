import "./App.css";
import React, { useState } from "react";

function App() {
  console.clear()
  // Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: true },
        { id: 1, text: "Boston", isCorrect: true },
        { id: 2, text: "Santa Fe", isCorrect: true },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: true },
        { id: 2, text: "1774", isCorrect: true },
        { id: 3, text: "1826", isCorrect: true },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: true },
        { id: 2, text: "Thomas Jefferson", isCorrect: true },
        { id: 3, text: "Benjamin Franklin", isCorrect: true },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: true },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: true },
        { id: 3, text: "Montana", isCorrect: true },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: false },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0)
    setFinalResults(false)
  }

  // Helper function
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResults(true)
    }
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>USA Quiz</h1>

      {/* 2. Current score */}
      <h2>Current score: {score}</h2>
      {showFinalResults ? (
        /* 4. Final result */
        <div className="final-results">
          <h1>Final results</h1>
          <h2>{score} out of {questions.length} correct - {(score / (questions.length) * 100).toFixed(2)} %</h2>
          <button
            onClick={() => restartGame()} >
            Restart
          </button>
        </div>
      ) : (
        /* 3. Question cards */
        <div className="question-card">
          <h2>Question {currentQuestion+1} of {questions.length}:</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}>
                    {option.text}
                  </li>
                )
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
