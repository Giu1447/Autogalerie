import React from 'react';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold text-main mb-4">Videos</h1>
      <div className="flex flex-col items-center">
        <p className="text-third mb-8">Sehen Sie sich unsere aufregenden Autovideos an.</p>

        {/* Example video section */}
        <div className="w-full max-w-4xl">
          <video controls className="w-full h-auto rounded-lg">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Videos;
