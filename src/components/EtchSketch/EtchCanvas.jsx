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
            backgroundColor: 'lightgrey',
            width: 900,
            height: 600,
            interactive: false,
        });
        return newCanvas;
    };

    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <>
            <div className='etch-main'>
                <canvas id="etch-canvas" />
                <Sketching canvas={ canvas }/> 
                <div className='etch-heading'>
                    <h1>Etch A Canvas</h1>
                </div>
            </div>
        </>
    );
};

export default EtchCanvas;