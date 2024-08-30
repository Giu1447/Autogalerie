import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Auto-Webseite. Alle Rechte vorbehalten.</p>
        <p>
          <a href="#" className="hover:text-gray-400">Impressum</a> | 
          <a href="#" className="hover:text-gray-400">Datenschutz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
