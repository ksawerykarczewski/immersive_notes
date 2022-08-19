import React, { useEffect } from 'react';
import Sketch from 'react-p5';

const Banner = () => {
    let colorBrightGray = '#e9ebeb';
    let colorArcticLime = '#cbff0e';

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, 500).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(colorBrightGray);
        p5.noStroke();
        p5.fill(colorArcticLime);
        p5.rect(0, 0, 50);
        p5.rect(450, 0, 50);
        p5.rect(0, 450, 50);
        p5.rect(450, 450, 50);
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default Banner;
