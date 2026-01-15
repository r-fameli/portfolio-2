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

const getCirclePositions = (numCircles: number, offset: number) => {
    // Placing Constants
    const CENTER = 150;
    const DISTANCE = 250;
    const angleSteps = 360 / numCircles;
    const positions = new Array(numCircles);
    for (let i = 0; i < numCircles; i++) {
        const angle = offset + angleSteps * i;
        const x = CENTER + DISTANCE * Math.cos(angle * (Math.PI / 180));
        const y = CENTER + DISTANCE * Math.sin(angle * (Math.PI / 180));
        positions[i] = [x, y]
    };
    return positions
}

type Props = {
    numCircles: number,
}

const CirclingIcons = ({ numCircles }: Props) => {
    // Velocity Variables
    // velocity units are degrees per second
    const VELOCITY_BASE = 15;

    // STATES
    const [velocity, setVelocity] = useState(VELOCITY_BASE);
    const [angleOffset, setAngleOffset] = useState(0);
    const circlePositions = getCirclePositions(numCircles, angleOffset)

    useAnimationFrame((deltaTime: number) => {
        if (Math.abs(velocity) > Math.abs(VELOCITY_BASE)) {
            setVelocity(velocity => velocity * 0.99 * (deltaTime * 0.001));
        } else if (velocity < Math.abs(VELOCITY_BASE)) {
            setVelocity(VELOCITY_BASE);
        }
        // Adjust the offset of the circles based on time elapsed
        setAngleOffset(angleOffset => angleOffset + (velocity * deltaTime * 0.001));
    })

    return <div className="CirclingIcons">
        <div className="circling-icons-frame">
            <div className="big-circle"></div>
            <ul className="little-circles">
                {circlePositions.map(([x, y], i) => (
                    <li
                        key={i}
                        style={{
                            transform: `translate3d(${x}px, ${y}px, 0)`,
                            transition: 'transform 0.1s ease-out',
                            fontSize: '10px',
                        }}></li>
                ))}
            </ul>
        </div>
    </div>
}

export default CirclingIcons;