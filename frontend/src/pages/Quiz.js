import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
  question: "Which plant is commonly called the 'Indian Gooseberry'?",
  options: ["Amla", "Tulsi", "Ashwagandha", "Fenugreek"],
  answer: "Amla",
},
{
  question: "Which herb is widely used for boosting immunity and known as 'Holy Basil'?",
  options: ["Tulsi", "Neem", "Mint", "Coriander"],
  answer: "Tulsi",
},
{
  question: "Which plant is considered effective in treating burns and skin conditions?",
  options: ["Aloe Vera", "Neem", "Turmeric", "Brahmi"],
  answer: "Aloe Vera",
},
{
  question: "Which herb is known as the 'Golden Spice of India'?",
  options: ["Turmeric", "Saffron", "Fenugreek", "Clove"],
  answer: "Turmeric",
},
{
  question: "Which plant is famous for improving memory and brain function?",
  options: ["Brahmi", "Amla", "Tulsi", "Ginger"],
  answer: "Brahmi",
},
{
  question: "Which herb is traditionally used to aid digestion and freshen breath?",
  options: ["Mint", "Coriander", "Clove", "Fennel"],
  answer: "Mint",
    },
{
  question: "Which plant is called 'Indian Ginseng' and helps reduce stress?",
  options: ["Ashwagandha", "Brahmi", "Neem", "Tulsi"],
  answer: "Ashwagandha",
},
{
  question: "Which herb is rich in iron and commonly used to reduce anemia?",
  options: ["Fenugreek", "Coriander", "Mint", "Tulsi"],
  answer: "Fenugreek",
},
{
  question: "Which spice is obtained from the dried flower buds of a tree and used as a pain reliever?",
  options: ["Clove", "Cardamom", "Cinnamon", "Pepper"],
  answer: "Clove",
},
{
  question: "Which plant is often used in herbal teas to relieve nausea?",
  options: ["Ginger", "Lemongrass", "Mint", "Tulsi"],
  answer: "Ginger",
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
