// @ts-nocheck 
'use client'
import React, { useEffect, useState } from "react";
import bgColorsConfig from "../../public/bgColorsConfig.json";

const randomChoice = (array) => {
    const randomFloat = Math.random();
    const randomIndex = Math.floor(randomFloat * array.length);
    return array[randomIndex];
}

function randomRange(start, stop) {
    const randomFloat = Math.random();
    const randomInteger = start + Math.floor(randomFloat * (stop - start));
    return randomInteger;
}

const allcolors = bgColorsConfig.colors
const DynamicCircle = ({ cx, cy, radius }) => {
    const randomPalette = randomChoice(allcolors)
    // randomPalette.filter(colorHex => Color.contrastRatio(colorHex, '#00000055') < 7.5);
    const randomColor = randomChoice(randomPalette);

    return (
        <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill={randomColor}
            opacity="0.7"
            style={{ position: 'absolute' }}
        />
    );
};

export default function DynamicCircles() {
    const [clientWidth, setClientWidth] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        setClientWidth(window.innerWidth);
        setClientHeight(5000);
        return () => {
        };
    }, []);

    const dynamicCircles = [];
    for (let i = 0; i < 16; i++) {
        const randomCx = randomRange(0, clientWidth);
        const randomCy = randomRange(0, clientHeight);
        const randomRadius = randomRange(80, 170);
        dynamicCircles.push(
            <DynamicCircle key={i} cx={randomCx} cy={randomCy} radius={randomRadius} />
        );
    }

    return (
        <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${clientWidth} ${clientHeight}`}
            style={{ position: 'absolute', top: 0, left: 0 }}
        >
            {dynamicCircles}
        </svg>
    );
}
