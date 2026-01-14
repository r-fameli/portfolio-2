import { useEffect, useRef, useState } from 'react';
import './CirclingIcons.scss';

// Custom hook for smooth animations
const useAnimationFrame = (callback: (deltaTime: number) => void) => {
    const requestRef = useRef<number>(undefined);
    const previousTimeRef = useRef<number>(undefined);

    const animate = (time: number) => {
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current as number);
    }, []);
};

const CirclingIcons = () => {
    // Placing Constants
    const CENTER = 150;
    const DISTANCE = 250;
    const littleCircles = document.querySelectorAll('little-circles li')
    const angleSteps = 360 / littleCircles.length;

    // Velocity Variables
    // velocity units are degrees per second
    const VELOCITY_BASE = 15;
    const VELOCITY_MAX = 200;
    const VELOCITY_MIN = -1 * VELOCITY_MAX;
    const SLOWDOWN_FACTOR = 0.95; // Used for velocity calculations

    // STATES
    const [velocity, setVelocity] = useState(VELOCITY_BASE);
    const [angleOffset, setAngleOffset] = useState(0);

    // Renders circles in correct location
    const placeCircles = () => {
        littleCircles.forEach((littleCircle, index) => {
            const angle = angleOffset + angleSteps * index;
            const x = CENTER + DISTANCE * Math.cos(angle * (Math.PI / 180));
            const y = CENTER + DISTANCE * Math.sin(angle * (Math.PI / 180));
            littleCircle.animate(
                {
                    transform: `translate3d(${x + "px"}, ${y + "px"}, 0)`
                },
                { duration: 20, fill: "forwards" }
            );
        });
    };

    useAnimationFrame((deltaTime: number) => {
        if (Math.abs(velocity) > Math.abs(VELOCITY_BASE)) {
            setVelocity(velocity => velocity * 0.99 * (deltaTime * 0.001));
        } else if (velocity < Math.abs(VELOCITY_BASE)) {
            setVelocity(VELOCITY_BASE);
        }
        // Adjust the offset of the circles based on time elapsed
        setAngleOffset(angleOffset => angleOffset + (velocity * deltaTime * 0.001));

        placeCircles();
    })

    return <div className="CirclingIcons">
        <div className="circling-icons-frame">
            <div className="big-circle" />
            <ul className="little-circles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
        </div>
    </div>
}

export default CirclingIcons;