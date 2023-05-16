import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';
import Toolbar from './Toolbar';

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            backgroundColor: 'white',
            width: window.innerWidth,
            height: 600
        })

        // uncomment to get history function to work however you will have to refresh page after saving code.
        if (canvas != null){
            canvas.historyInit();
        }

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

{/* <Deserialisation canvas={ canvas } /> */}

export default Canvas;