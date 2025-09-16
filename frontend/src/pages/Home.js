import Slider from "react-slick";
import "./Home.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false, // cleaner look
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🌱 Virtual Herbal Garden</h1>
      <p className="home-subtitle">
        Discover nature’s remedies for skincare, haircare, and health.
      </p>

      <Slider {...settings}>
        <div>
          <img
            src="https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991"
            alt="Aloe Vera"
          />
        </div>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg"
            alt="Neem"
          />
        </div>
        <div>
          <img
            src="https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg?v=1729499689"
            alt="Tulsi"
          />
        </div>
      </Slider>
    </div>
  );
}
