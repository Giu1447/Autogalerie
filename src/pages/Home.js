import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div id="content" className="container mx-auto p-4 flex flex-col items-center bg-primary">
        <div className="relative h-[70vh] w-full">
          <img
              src={require('../pictures/Bugatti.jpg')}
              alt="Bugatti"
              className="w-full h-full object-cover rounded-lg bg-transparent bg-[radial-gradient(circle,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.5)_100%)]"
          />
          <div className="absolute inset-0 bg-transparent bg-[radial-gradient(circle,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.5)_100%)]"></div>

          <Link
              to="/galerie"
              className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg border-highlight bg-highlight px-5 py-2.5 font-medium text-secondary transition-colors
          before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0
          before:bg-primary before:transition-transform before:duration-300 before:content-['']
          hover:text-white before:hover:scale-x-100 before:rounded-md"
          >
            Bildergalerie ansehen
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full justify-items-center">
          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-highlight">Animation</h2>
              <p className="text-secondary">Sehen sie sich eine bezaubernde Animation an von ihrem Lieblingsauto.</p>
            </div>
            <Link
                to="/animation"
                className="mt-4 bg-transparent text-white rounded-lg transition duration-300 transform hover:scale-105 px-4 py-1.5
            border-2 border-accent self-end"
            >
              Mehr erfahren
            </Link>
          </div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-highlight">Galerie</h2>
              <p className="text-secondary">Schauen Sie sich hier alle Modelle an die wir anbieten</p>
            </div>
            <Link
                to="/modelle"
                className="mt-4 bg-transparent text-white rounded-lg transition duration-300 transform hover:scale-105 px-4 py-1.5
            border-2 border-accent self-end"
            >
              Mehr erfahren
            </Link>
          </div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-highlight">Videos</h2>
              <p className="text-secondary">Sehen sie sich die atemberaubende Bildergalerie an mit allen möglichen Bildern</p>
            </div>
            <Link
                to="/galerie"
                className="mt-4 bg-transparent text-white rounded-lg transition duration-300 transform hover:scale-105 px-4 py-1.5
            border-2 border-accent self-end"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Home;
