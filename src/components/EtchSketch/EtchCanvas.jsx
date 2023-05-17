import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import Sketching from './Sketching';

const EtchCanvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    const initCanvas = () => { 
        const newCanvas = new fabric.Canvas('etch-canvas', {
            backgroundColor: 'white',
            width: 900,
            height: 600,
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