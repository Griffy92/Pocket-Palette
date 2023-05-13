import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import FreeDraw from './Free-Draw';
import ColourSelect from './Colour-Select';
import Toolbar from './Toolbar';

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);
    const [ colour, setColour] = useState("");

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
            <FreeDraw canvas={ canvas } colour={ colour }/>
            <ColourSelect onChange={ setColour }/>
            <Toolbar canvas={ canvas } />
            <canvas id="canvas" />
        </>
    );
};

export default Canvas;