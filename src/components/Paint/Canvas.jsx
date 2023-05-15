import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';
import Toolbar from './Toolbar';
import Serialisation from './Serialisation'
import Deserialisation from './Deserialisation'

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            height: 600,
            width: 1000,
            backgroundColor: 'white'
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
            <Serialisation canvas={ canvas } />
            <Deserialisation canvas={ canvas } />
            <canvas id="canvas" />
        </>
    );
};

export default Canvas;