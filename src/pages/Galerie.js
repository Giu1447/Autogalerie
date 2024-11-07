import React, { useState } from 'react';

const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
    "https://via.placeholder.com/600x400?text=Image+5"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
      <div className="container mx-auto p-4 bg-primary">
        <h1 className="text-3xl font-bold text-highlight mb-4">Galerie</h1>
        <div className="flex flex-col items-center">
          <p className="text-secondary mb-8">Stöbern Sie durch unsere beeindruckende Bildersammlung.</p>

          <div className="relative w-full max-w-4xl h-96">
            <div className="overflow-hidden rounded-lg h-full">
              <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 text-highlight"
                onClick={goToPrevious}
            >
              ❮
            </button>

            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 text-highlight"
                onClick={goToNext}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
  );
};

export default Galerie;
