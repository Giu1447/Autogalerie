import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = () => {
    const videoSources = [
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="container mx-auto p-4 bg-primary">
            <div className="max-w-4xl mx-auto">
                <Slider {...settings}>
                    {videoSources.map((src, index) => (
                        <div key={index}>
                            <video
                                controls
                                className="w-full h-auto rounded-lg border-2 border-accent"
                            >
                                <source src={src} type="video/mp4" />
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
