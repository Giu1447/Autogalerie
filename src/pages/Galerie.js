import React, { useState } from 'react';

const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://placehold.co/600x400/orange/white",
    "https://placehold.co/600x400/blue/white",
    "https://placehold.co/600x400/green/white",
    "https://placehold.co/600x400/purple/white",
    "https://placehold.co/600x400/yellow/white",
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
      <div className="container mx-auto p-4 bg-primary">
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

            {/* Linker Pfeil */}
            <button
                className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
                onClick={goToPrevious}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            <button
                className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
                onClick={goToNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7.5 7.5m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Galerie;
