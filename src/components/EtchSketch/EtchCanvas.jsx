import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
// components
import Sketching from './Sketching';
// css
import './EtchCanvas.css';

const EtchCanvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    const initCanvas = () => { 
        const newCanvas = new fabric.Canvas('etch-canvas', {
            backgroundColor: 'white',
            width: 600,
            height: 300,
            interactive: false,
        })
        return newCanvas;
    };

    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <>
            <canvas id="etch-canvas" />
            <Sketching canvas={ canvas }/> 
        </>
    );
};

export default EtchCanvas;