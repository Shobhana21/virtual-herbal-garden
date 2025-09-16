import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "Which plant is commonly used to treat burns?",
      options: ["Tulsi", "Neem", "Aloe Vera", "Ashwagandha"],
      answer: "Aloe Vera",
    },
    {
      question: "Which plant is known as 'Holy Basil'?",
      options: ["Tulsi", "Brahmi", "Neem", "Amla"],
      answer: "Tulsi",
    },
    {
      question: "Which plant is best known for its antibacterial properties?",
      options: ["Neem", "Aloe Vera", "Mint", "Turmeric"],
      answer: "Neem",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🌿 Herbal Quiz</h1>
      {showScore ? (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button
            onClick={restartQuiz}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQ].question}</h2>
          {questions[currentQ].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
