import React from 'react';
import { Link } from 'react-router-dom';

const Animation = () => {
  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold text-main mb-4">Animation</h1>
      <div className="flex flex-col items-center">
        <p className="text-third mb-8">Erleben Sie eine faszinierende Animation von Ihrem Lieblingsauto.</p>

        {/* Example animation section */}
        <div className="w-full max-w-4xl">
          <img src="https://via.placeholder.com/600x400?text=Animation" alt="Animation" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Animation;
