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
            src="https://www.lotus.in/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991"
            alt="Aloe Vera"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/06/66/22/45/360_F_666224592_nId6bSdaOgx8yjgEvokpP791NG5WYXw3.jpg"
            alt="Neem"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="https://www.ugaoo.com/cdn/shop/articles/561da47a50.jpg?v=1729499689"
            alt="Tulsi"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </Slider>
    </div>
  );
}
