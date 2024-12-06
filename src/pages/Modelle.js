import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modelle = () => {
  const cars = {
    BMW: {
      "3er Serie": [
        "https://placehold.co/600x400/blue/white?text=BMW+Series+3",
        "https://placehold.co/600x400/yellow/white?text=BMW+Series+3",
        "https://placehold.co/600x400/black/white?text=BMW+Series+3",
        "https://placehold.co/600x400/orange/white?text=BMW+Series+3",
        "https://placehold.co/600x400/pink/white?text=BMW+Series+3"
      ],
      "5er Serie": [
        "https://placehold.co/600x400/blue/white?text=BMW+Series+5",
        "https://placehold.co/600x400/black/white?text=BMW+Series+5",
        "https://placehold.co/600x400/yellow/white?text=BMW+Series+5",
        "https://placehold.co/600x400/orange/white?text=BMW+Series+5",
        "https://placehold.co/600x400/pink/white?text=BMW+Series+5",
      ],
    },
    Audi: {
      A4: [
        "https://placehold.co/600x400/black/white?text=Audi+A4",
        "https://placehold.co/600x400/blue/white?text=Audi+A4",
        "https://placehold.co/600x400/pink/white?text=Audi+A4",
        "https://placehold.co/600x400/orange/white?text=Audi+A4",
        "https://placehold.co/600x400/yellow/white?text=Audi+A4",
      ],
    },
  };

  const [selectedBrand, setSelectedBrand] = useState("BMW");
  const [selectedModel, setSelectedModel] = useState("");
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);

  useEffect(() => {
    // Standardmodell setzen, wenn Marke ausgewählt ist
    setSelectedModel(Object.keys(cars[selectedBrand])[0]);
  }, [selectedBrand]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setBrandDropdownOpen(false);
        setModelDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(Object.keys(cars[brand])[0]); // Erstes Modell setzen
    setBrandDropdownOpen(false);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setModelDropdownOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <div className="container mx-auto p-8 bg-primary text-secondary">
        <h1 className="text-3xl font-bold text-center mb-8 text-accent">Car Showcase</h1>

        {/* Dropdowns */}
        <div className="flex justify-center space-x-36 mb-8">
          {/* Marken Dropdown */}
          <div className="relative dropdown">
            <button
                className="text-white bg-header hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-highlight font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center transition-all duration-200"
                onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
            >
              {selectedBrand}
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {brandDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-secondary divide-y divide-gray-200 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-black">
                    {Object.keys(cars).map((brand) => (
                        <li key={brand}>
                          <button
                              onClick={() => handleBrandChange(brand)}
                              className="block px-4 py-2 w-full text-left hover:bg-highlight hover:text-white transition-all duration-200"
                          >
                            {brand}
                          </button>
                        </li>
                    ))}
                  </ul>
                </div>
            )}
          </div>

          {/* Modelle Dropdown */}
          <div className="relative dropdown">
            <button
                className="text-white bg-header hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-highlight font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center transition-all duration-200"
                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
            >
              {selectedModel || "Modell wählen"}
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {modelDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-secondary divide-y divide-gray-200 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-black">
                    {Object.keys(cars[selectedBrand]).map((model) => (
                        <li key={model}>
                          <button
                              onClick={() => handleModelChange(model)}
                              className="block px-4 py-2 w-full text-left hover:bg-highlight hover:text-white transition-all duration-200"
                          >
                            {model}
                          </button>
                        </li>
                    ))}
                  </ul>
                </div>
            )}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {selectedBrand && selectedModel && cars[selectedBrand][selectedModel] ? (
              <Slider {...settings}>
                {cars[selectedBrand][selectedModel].map((image, index) => (
                    <div key={index}>
                      <img
                          src={image}
                          alt={`${selectedBrand} ${selectedModel} - ${index + 1}`}
                          className="w-full h-[400px] object-cover rounded-lg"
                      />
                    </div>
                ))}
              </Slider>
          ) : (
              <p className="text-secondary text-center">Bitte eine Marke und ein Modell auswählen.</p>
          )}
        </div>
      </div>
  );
};

export default Modelle;
