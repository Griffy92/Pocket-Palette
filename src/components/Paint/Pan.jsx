import { useState, useEffect } from 'react'
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Pan = (props) => {
    const [panMode, setPanMode] = useState(false)
    const [mousePressed, setMousePressed] = useState(false)
    const { canvas } = props

    useEffect(() => {

        if ( canvas !== null ) {
            const handleMouseDown = () => {
                setMousePressed(true);
            };

            const handleMouseUp = () => {
                setMousePressed(false);
            };

            const handleMouseMove = (event) => {
                // block changes the cursor to the hand icon when pan mode active
                if ( panMode ) {
                    canvas.setCursor('grab');
                    canvas.renderAll();
                } else {
                    canvas.setCursor('default');
                    canvas.renderAll();
                };

                // panning
                if (mousePressed && panMode) {
                    const mouseEvent = event.e;
                    const delta = new fabric.Point(mouseEvent.movementX, mouseEvent.movementY);
                    canvas.relativePan(delta);
                    canvas.selection = false; // disable selection box during pan
                } else {
                    canvas.selection = true;
                };
            };

            canvas.on('mouse:down', handleMouseDown);
            canvas.on('mouse:up', handleMouseUp);
            canvas.on('mouse:move', handleMouseMove);

            return () => { // clean up 
                canvas.off('mouse:down', handleMouseDown);
                canvas.off('mouse:up', handleMouseUp);
                canvas.off('mouse:move', handleMouseMove);
            };
        };
    }, [canvas, mousePressed, panMode]);

    const _handleTogglePanMode = () => {
        setPanMode(!panMode);
        canvas.isDrawingMode = false
    };

    return (
        <>
            <Button className="add_button pan_button" onClick={ _handleTogglePanMode } title="Pan Mode"></Button>
        </>
    );
};

export default Pan;
