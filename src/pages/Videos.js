import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => {
    return (
        <button
            className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
            </svg>
        </button>
    );
};

const CustomNextArrow = ({onClick}) => {
    return (
        <button
            className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-gray-700 bg-opacity-80 p-3 rounded-full hover:bg-opacity-90 text-white"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7.5 7.5m0 0-7.5 7.5M21 12H3"/>
            </svg>
        </button>
    );
};

const Videos = () => {
    const videos = [
        {
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            text: "Das Abenteuer von Big Buck Bunny!"
        },
        {
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            text: "Eine surreale Reise in Elephants Dream."
        },
        {
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            text: "Für größere Flammen – Feuer frei!"
        },
        {
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            text: "Tears of Steel – Eine epische Sci-Fi-Erzählung."
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="container mx-auto p-4 bg-primary text-center">
            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {videos.map((video, index) => (
                        <div key={index}>
                            <p className="mt-4 text-secondary text-lg mb-4">{video.text}</p>
                            <video
                                controls
                                className="w-full h-[500px] object-cover rounded-lg border-2 border-accent mb-4"
                            >
                                <source src={video.src} type="video/mp4"/>
                                Ihr Browser unterstützt das Video-Tag nicht.
                            </video>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Videos;
