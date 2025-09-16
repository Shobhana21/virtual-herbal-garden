// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🌿 Herbal Garden</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
