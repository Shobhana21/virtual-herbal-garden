// frontend/src/pages/About.js
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Virtual Herbal Garden</h1>
      <p>
        The <strong>Virtual Herbal Garden</strong> is an educational web
        application designed to spread awareness about medicinal, skincare, and
        haircare plants. 🌱
      </p>

      <h2 className="about-section-title">🌿 Purpose</h2>
      <p>
        Our goal is to provide easy access to reliable information about herbal
        plants, their benefits, and traditional uses. Whether you are a student,
        researcher, or just a curious learner, this platform helps you explore
        and understand nature’s healing power.
      </p>

      <h2 className="about-section-title">✨ Features</h2>
      <ul className="about-list">
        <li>Explore different categories of plants with images and descriptions</li>
        <li>Learn about their medicinal, skincare, and haircare benefits</li>
        <li>Take fun quizzes to test your knowledge</li>
        <li>Simple, user-friendly interface</li>
      </ul>

      <h2 className="about-section-title">👩‍💻 Team</h2>
      <div className="team-section">
        <p>
          This project was developed as a part of my academic journey in
          Computer Science Engineering. It represents our efforts in learning
          <strong> MERN Stack development</strong> and building real-world
          solutions.
        </p>
      </div>

      <p className="about-quote">
        “Let food be thy medicine and medicine be thy food.” – Hippocrates
      </p>
    </div>
  );
}
