import { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
    const [ canvas, setCanvas ] = useState("");

    const initCanvas = () => {
        new fabric.Canvas('canvas', {
            height: 300,
            width: 300,
            backgroundColor: 'white'
        })
    };

    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <canvas id="canvas" />
    );
};

export default Canvas;