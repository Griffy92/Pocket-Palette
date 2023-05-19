import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { useNavigate } from 'react-router-dom'
// components
import Sketching from './Sketching';
import ContextMenu from './Context-Menu';
// css
import './EtchCanvas.css';
import 'animate.css'

const EtchCanvas = ( props ) => {
    const [ canvas, setCanvas ] = useState(null);
    const [ count, setCount ] = useState(0);
    const { session } = props;
    const navigate = useNavigate();

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

    useEffect ( () => {
        if ( !session ) {
            navigate("/")
        } else {
            setCanvas(initCanvas());
        }
    }, [session]);

    return (
        <>
            <div className={ count >= 22 ? 'etch-main animate__animated animate__wobble' : 'etch-main'}>
                <canvas id="etch-canvas" />
                <Sketching canvas={ canvas } incCount={ incCount } count={ count } resetCount={ resetCount } /> 
                <div className='etch-heading'>
                    <h1>Etch A Canvas</h1>
                </div>
                <ContextMenu canvas={ canvas }/>
            </div>
        </>
    );
};

export default EtchCanvas;
