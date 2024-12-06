import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Car } from '../components/car.svg';

const Animation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const carRef = useRef(null);
    const requestRef = useRef(null);

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const updatePositionAndRotation = () => {
        if (carRef.current) {
            const carX = carRef.current.getBoundingClientRect().left + carRef.current.clientWidth / 2;
            const carY = carRef.current.getBoundingClientRect().top + carRef.current.clientHeight / 2;
            const dx = mousePosition.x - carX;
            const dy = mousePosition.y - carY;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Berechnung des Drehwinkels
            setRotation(angle);
        }

        requestRef.current = requestAnimationFrame(updatePositionAndRotation);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        requestRef.current = requestAnimationFrame(updatePositionAndRotation);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [mousePosition]);

    return (
        <div className="container mx-auto p-4 bg-white h-screen">
            <h1 className="text-3xl font-bold text-main mb-4">Auto folgt der Maus!</h1>

            <div
                ref={carRef}
                style={{
                    position: 'absolute',
                    left: `${mousePosition.x - 50}px`,
                    top: `${mousePosition.y - 50}px`,
                    transition: 'left 0.05s ease-out, top 0.05s ease-out',
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                <Car className="w-16 h-16" />
            </div>
        </div>
    );
};

export default Animation;
