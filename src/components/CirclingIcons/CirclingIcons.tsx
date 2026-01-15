import { useState } from 'react';
import './CirclingIcons.scss';
import { useAnimationFrame } from '../../hooks/useAnimationFrame';

// Placing Constants, in pixels and degrees
const CENTER = 150;
const DIST_TO_CENTER = 250; // Distance to center
const ROTATION_OFFSET = 45;
const DIST_X_OFFSET = 20;
const DIST_Y_OFFSET = -100;

const radians = (degrees: number) => degrees * (Math.PI / 180)

const getCirclePositions = (numCircles: number, offset: number) => {
    const angleSteps = 360 / numCircles;
    const positions = new Array(numCircles);
    const rotationOffsetRadians = radians(ROTATION_OFFSET);
    for (let i = 0; i < numCircles; i++) {
        const angle = offset + angleSteps * i;
        const xBeforeRot = (DIST_TO_CENTER + DIST_X_OFFSET) + Math.cos(radians(angle));
        const yBeforeRot = (DIST_TO_CENTER + DIST_Y_OFFSET) + Math.sin(radians(angle));
        // Apply rotation to tilt the moons on an axis
        const cosRot = Math.cos(rotationOffsetRadians);
        const sinRot = Math.sin(rotationOffsetRadians);
        const x = CENTER + (xBeforeRot * cosRot - yBeforeRot * sinRot);
        const y = CENTER + (xBeforeRot * sinRot + yBeforeRot * cosRot);

        // Without axis rotation:
        // const x = CENTER + (DIST_TO_CENTER) * Math.cos(radians(angle));
        // const y = CENTER + (DIST_TO_CENTER) * Math.sin(radians(angle));
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
                            zIndex: 20,
                        }}></li>
                ))}
            </ul>
        </div>
    </div>
}

export default CirclingIcons;