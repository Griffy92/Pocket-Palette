import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Toolbar from './Toolbar';

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            height: 600,
            width: 600,
            backgroundColor: 'white'
        })
        return newCanvas;
    };

    // render canvas on load
    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <>
            <Toolbar canvas={ canvas } />
            <canvas id="canvas" />
        </>
    );
};

export default Canvas;