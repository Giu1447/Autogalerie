import React from 'react';

const Videos = () => {
    return (
        <div className="container mx-auto p-4 bg-primary">
            <h1 className="text-3xl font-bold text-highlight mb-4">Videos</h1>
            <div className="flex flex-col items-center">
                <p className="text-secondary mb-8">Sehen Sie sich unsere aufregenden Autovideos an.</p>

                <div className="w-full max-w-4xl">
                    <video controls className="w-full h-auto rounded-lg border-2 border-accent">
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Videos;
