import { useState, useEffect } from 'react'

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
                if ( panMode ) {
                    canvas.setCursor('grab');
                    canvas.renderAll();
                } else {
                    canvas.setCursor('default');
                    canvas.renderAll();
                };

                if (mousePressed && panMode) {
                    const mouseEvent = event.e;
                    const delta = new fabric.Point(mouseEvent.movementX, mouseEvent.movementY);
                    canvas.relativePan(delta);
                    canvas.selection = false;
                } else {
                    canvas.selection = true;
                };
            };

            canvas.on('mouse:down', handleMouseDown);
            canvas.on('mouse:up', handleMouseUp);
            canvas.on('mouse:move', handleMouseMove);

            return () => {
                canvas.off('mouse:down', handleMouseDown);
                canvas.off('mouse:up', handleMouseUp);
                canvas.off('mouse:move', handleMouseMove);
            };
        };
    }, [canvas, mousePressed, panMode]);

    const _handleTogglePanMode = () => {
        setPanMode(!panMode);
    };

    return (
        <>
            <button className="add_button pan_button" onClick={ _handleTogglePanMode } title="Pan Mode"></button>
        </>
    );
};

export default Pan;
