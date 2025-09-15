import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>🌱 Virtual Herbal Garden</h1>
      <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
        Discover nature’s remedies for skincare, haircare, and health.
      </p>

      <Slider {...settings}>
        <div>
          <img
            src="https://example.com/aloe.jpg"
            alt="Aloe Vera"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="https://example.com/neem.jpg"
            alt="Neem"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="https://example.com/tulsi.jpg"
            alt="Tulsi"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </Slider>
    </div>
  );
}
