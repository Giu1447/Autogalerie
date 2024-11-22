import React from 'react';
import { Link } from 'react-router-dom';

const Modelle = () => {
  return (
      <div className="container mx-auto p-4 bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-secondary mb-8">Entdecken Sie die verschiedenen Modelle in unserer Kollektion.</p>

          {/* Carousel Component */}
          <div className="carousel w-full max-w-4xl">
            <div className="carousel-inner relative overflow-hidden">
              <div className="carousel-item active">
                <img
                    src="https://via.placeholder.com/600x400?text=Model+1"
                    alt="Model 1"
                    className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="carousel-item">
                <img
                    src="https://via.placeholder.com/600x400?text=Model+2"
                    alt="Model 2"
                    className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Add more carousel items here */}
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon text-highlight" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
              <span className="carousel-control-next-icon text-highlight" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Modelle;
