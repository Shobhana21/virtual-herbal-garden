import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleQuizClick = () => {
    if (!user) {
      alert("Please login to access the Quiz");
      navigate("/login");
    } else {
      navigate("/quiz");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🌿 Herbal Garden</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>

        {/* Quiz behaves like a link */}
        <button onClick={handleQuizClick} className="nav-link-btn">
          Quiz
        </button>

        {!user ? (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        ) : (
          <>
            <span className="user-name">Hi, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
