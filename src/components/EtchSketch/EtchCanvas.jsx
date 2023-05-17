import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
// components
import Sketching from './Sketching';
// css
import './EtchCanvas.css';
import 'animate.css'

const EtchCanvas = () => {
    const [ canvas, setCanvas ] = useState(null);
    const [ count, setCount ] = useState(0);

    const initCanvas = () => { 
        const newCanvas = new fabric.Canvas('etch-canvas', {
            backgroundColor: 'lightgrey',
            width: 900,
            height: 600,
            interactive: false,
        });
        return newCanvas;
    };

    const incCount = () => {
        setCount( count => count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <>
            <div className={ count >= 22 ? 'etch-main animate__animated animate__wobble' : 'etch-main'}>
                <canvas id="etch-canvas" />
                <Sketching canvas={ canvas } incCount={ incCount } count={ count } resetCount={ resetCount } /> 
                <div className='etch-heading'>
                    <h1>Etch A Canvas</h1>
                </div>
            </div>
        </>
    );
};

export default EtchCanvas;
