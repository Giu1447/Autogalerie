import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-main p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">AutoGalerie</Link>
        </div>
        <nav className="space-x-8 relative">
          <Link
            to="/modelle"
            className="text-third transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-second 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 
              after:origin-left"
          >
            Modelle
          </Link>
          <Link
            to="/galerie"
            className="text-third transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-second 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 
              after:origin-left"
          >
            Galerie
          </Link>
          <Link
            to="/videos"
            className="text-third transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-second 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 
              after:origin-left"
          >
            Videos
          </Link>
          <Link
            to="/animation"
            className="text-third transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-second 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 
              after:origin-left"
          >
            Animation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
