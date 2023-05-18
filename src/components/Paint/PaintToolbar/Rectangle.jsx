import { fabric } from "fabric";
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Rectangle = ( props ) => {
    const { canvas, colour, strokeColour, strokeSize } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'purple';
    if (colour != "") {
        fillColour = colour;
    };

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
            height: 140,
            width: 100,
            fill: fillColour,
            strokeWidth: strokeSize,
            stroke: strokeColour
        });
        canvas.isDrawingMode = false;
        canvas.add(rect);
        canvas.renderAll();
    }

    return (
        <>
            <Button className="add_button paint_common add_rect" onClick={ _handleAddRect } title="Add Rectangle"></Button>
        </>
    );
};

export default Rectangle;