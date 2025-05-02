import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Clock = ({date}) => {
    const { mode } = useContext(GameContext);

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const hourAngle = (hour % 12) * 30 + minute * 0.5;
    const minuteAngle = minute * 6;
    const secondAngle = second * 6;
    
    const minuteMarkerLines = [];
    for (let angle = 0; angle < 360; angle = angle + 6) {
        minuteMarkerLines.push(
            <line
                key={angle}
                x1="200" y1="200"
                x2="200" y2={angle % 30 === 0 ? 180 : 185}
                stroke={angle % 30 === 0 ? "red" : "black"}
                strokeWidth="3"
                transform={`rotate(${angle}, 200, 200) translate(0,${angle % 30 === 0 ? -165 : -170})`}
            />
        );
    }

    const hourLabels = [];
    for (let angle = 0; angle < 360; angle = angle + 30) {
        const hourLabel = angle / 30;
        const angleRadian = angle * Math.PI / 180;
        const x = 200 + (Math.sin(angleRadian) * 135);
        const y = 205 - (Math.cos(angleRadian) * 135);
        hourLabels.push(
            <text
                key={angle}
                x={x}
                y={y}
                fontFamily="'Fredoka', sans-serif"
                fontSize="45"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--color-cyan-700)"
            >
                {hourLabel === 0 ? 12 : hourLabel}
            </text>
        );
    }

    return (
        <svg className="w-100 h-100" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="195" fill="#fff" stroke="#333" strokeWidth="10" />
            
            {/* Outline marks for minutes */}
            {minuteMarkerLines}

            {/* Hour labels */}
            {hourLabels}

            {/* Aiguille des heures */}
            <line
                x1="200" y1="200"
                x2="200" y2="80"
                stroke="var(--color-indigo-500)"
                strokeWidth="6"
                transform={`rotate(${hourAngle}, 200, 200)`}
            />
            
            {/* Aiguille des minutes */}
            <line
                x1="200" y1="200"
                x2="200" y2="40"
                stroke="black"
                strokeWidth="4"
                transform={`rotate(${minuteAngle}, 200, 200)`}
            />

            {/* Aiguille des secondes */}
            {mode === 'live' && (
            <line
                x1="200" y1="200"
                x2="200" y2="40"
                stroke="red"
                strokeWidth="2"
                transform={`rotate(${secondAngle}, 200, 200)`}
            />
            )}

            <circle cx="200" cy="200" r="8" fill="#333" stroke="#333" />
        </svg>
    );
}

export default Clock;