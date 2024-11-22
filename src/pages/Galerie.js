import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galerie = () => {
  const images = [
    {
      src: "https://placehold.co/600x400/orange/white",
      text: "Bild 1",
    },
    {
      src: "https://placehold.co/600x400/red/white",
      text: "Bild 2",
    },
    {
      src: "https://placehold.co/600x400/blue/white",
      text: "Bild 3",
    },
    {
      src: "https://placehold.co/600x400/green/white",
      text: "Bild 4",
    },
    {
      src: "https://placehold.co/600x400/purple/white",
      text: "Bild 5",
    },
    {
      src: "https://placehold.co/600x400/yellow/white",
      text: "Bild 6",
    }
  ];

  // Define CustomArrow components
  const CustomPrevArrow = ({ onClick }) => {
    return (
        <button
            className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
            onClick={onClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
        <button
            className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
            onClick={onClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7.5 7.5m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
    );
  };

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
      <div className="container mx-auto p-4 bg-primary">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            <Slider {...settings}>
              {images.map((image, index) => (
                  <div key={index} className="overflow-hidden ">
                    <p className="mt-4 text-secondary text-lg mb-4 text-center mb4">{image.text}</p>
                    <img
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
  );
};

export default Galerie;
