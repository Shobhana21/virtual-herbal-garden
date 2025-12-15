import Slider from "react-slick";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🌱 Virtual Herbal Garden</h1>
      <p className="home-subtitle">
        Discover nature’s remedies for skincare, haircare, and health.
      </p>

      {/* ---------- Carousel Section ---------- */}
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991"
            alt="Aloe Vera"
          />
          <div className="carousel-overlay">
            <h2>Aloe Vera</h2>
            <p>Natural solution for skin care & healing</p>
          </div>
        </div>

        <div className="carousel-slide">
          <img
            src="https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg"
            alt="Neem"
          />
          <div className="carousel-overlay">
            <h2>Neem</h2>
            <p>Powerful antibacterial and medicinal plant</p>
          </div>
        </div>

        <div className="carousel-slide">
          <img
            src="https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg?v=1729499689"
            alt="Tulsi"
          />
          <div className="carousel-overlay">
            <h2>Tulsi</h2>
            <p>Boosts immunity and reduces stress</p>
          </div>
        </div>
      </Slider>

      {/* ---------- Featured Plants Section ---------- */}
      <h2 className="section-title">🌿 Featured Plants</h2>

      <div className="featured-grid">
        <div className="featured-card">
          <img
            src="https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg"
            alt="Aloe Vera"
          />
          <h3>Aloe Vera</h3>
          <p>Skincare</p>
          <button
            className="details-btn"
            onClick={() => navigate("/explore")}
          >
            View Details
          </button>
        </div>

        <div className="featured-card">
          <img
            src="https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg"
            alt="Neem"
          />
          <h3>Neem</h3>
          <p>Medicinal</p>
          <button
            className="details-btn"
            onClick={() => navigate("/explore")}
          >
            View Details
          </button>
        </div>

        <div className="featured-card">
          <img
            src="https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg"
            alt="Tulsi"
          />
          <h3>Tulsi</h3>
          <p>Medicinal</p>
          <button
            className="details-btn"
            onClick={() => navigate("/explore")}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
