import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galerie = () => {
  const images = [
    { src: require('../pictures/cars/ferrari_laferrari_5.JPG'), text: "Ferrari LaFerrari" },
    { src: require('../pictures/cars/astonmartin.JPG'), text: "Aston Martin" },
    { src: require('../pictures/cars/bmw.JPG'), text: "BMW" },
    { src: require('../pictures/cars/bugatti_veyron.JPG'), text: "Bugatti Veyron" },
    { src: require('../pictures/cars/ferrari_f40.JPG'), text: "Ferrari F40" },
    { src: require('../pictures/cars/ferrari_laferrari.JPG'), text: "Ferrari LaFerrari" },
    { src: require('../pictures/cars/ferrari_laferrari_2.JPG'), text: "Ferrari LaFerrari" },
    { src: require('../pictures/cars/ferrari_laferrari_3.JPG'), text: "Ferrari LaFerrari" },
    { src: require('../pictures/cars/lamborghini.JPEG'), text: "Lamborghini" },
    { src: require('../pictures/cars/mclaren_p1.JPG'), text: "McLaren P1" },
    { src: require('../pictures/cars/mclaren_p1gtr.JPEG'), text: "McLaren P1 GTR" },
    { src: require('../pictures/cars/pagani_huayra.JPG'), text: "Pagani Huayra" },
    { src: require('../pictures/cars/porsche_3.JPG'), text: "Porsche" },
    { src: require('../pictures/cars/porsche_gt3rs.JPEG'), text: "Porsche GT3 RS" },
    { src: require('../pictures/cars/porsche_gt3rs_2.JPEG'), text: "Porsche GT3 RS" },
  ];

  // Define CustomArrow components
  const CustomPrevArrow = ({ onClick }) => (
      <button
          className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
          onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
  );

  const CustomNextArrow = ({ onClick }) => (
      <button
          className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
          onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7.5 7.5m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
  );

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
                  <div key={index} className="overflow-hidden">
                    <p className="mt-4 text-secondary text-lg mb-4 text-center">{image.text}</p>
                    <img
                        src={image.src}
                        alt={image.text}
                        className="w-full h-[500px] object-contain rounded-lg"
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
