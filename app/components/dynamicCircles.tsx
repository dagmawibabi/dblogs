// @ts-nocheck 
'use client'
import React, { useEffect, useState } from "react";
import random from 'canvas-sketch-util/random';
import Color from 'canvas-sketch-util/color';
import configJSON from "../../public/config.json";

const allcolors = configJSON.colors
const DynamicCircle = ({ cx, cy, radius }) => {
    const randomPalette = random.pick(allcolors)
    randomPalette.filter(colorHex => Color.contrastRatio(colorHex, '#00000055') < 7.5);
    const randomColor = random.pick(randomPalette);

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
        setClientHeight(window.innerHeight);

        const handleResize = () => {
            setClientWidth(window.innerWidth);
            setClientHeight(window.innerHeight);
        };
        // window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const dynamicCircles = [];
    for (let i = 0; i < 5; i++) {
        const randomCx = random.range(0, clientWidth);
        const randomCy = random.range(0, clientHeight);
        const randomRadius = random.range(80, 170);

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
