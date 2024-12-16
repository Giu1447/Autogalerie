import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Car } from '../components/car.svg';

const Animation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const carRef = useRef(null);
    const containerRef = useRef(null);
    const requestRef = useRef(null);

    const handleMouseMove = (event) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
            const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));
            setMousePosition({ x, y });
        }
    };

    const updatePositionAndRotation = () => {
        if (carRef.current) {
            const carX = carRef.current.getBoundingClientRect().left + carRef.current.clientWidth / 2;
            const carY = carRef.current.getBoundingClientRect().top + carRef.current.clientHeight / 2;
            const dx = mousePosition.x - carX;
            const dy = mousePosition.y - carY;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
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
        <div className="flex flex-col h-screen">
            <div
                ref={containerRef}
                className="flex-grow relative bg-gray-100 overflow-hidden"
                style={{ position: 'relative' }}
            >
                <div
                    ref={carRef}
                    style={{
                        position: 'absolute',
                        left: `${mousePosition.x - 50}px`,
                        top: `${mousePosition.y - 50}px`,
                        transform: `rotate(${rotation}deg)`,
                        transition: 'left 0.05s ease-out, top 0.05s ease-out',
                    }}
                >
                    <Car className="w-16 h-16" />
                </div>
            </div>
        </div>
    );
};

export default Animation;
