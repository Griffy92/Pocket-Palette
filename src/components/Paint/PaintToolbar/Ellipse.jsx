import { fabric } from 'fabric'
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Ellipse = ( props ) => {
    const { canvas, primaryColour, secondaryColour, strokeColour, strokeSize, fillColour } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let defaultFillColour = '#FF9DC6';
    let defaultStrokeColour = 'white';
    let objectFillColour = "";
    let objectStrokeSize = strokeSize;
    let objectStrokeColour = strokeColour;

    if ((fillColour == "") && (primaryColour == "#000000")){
        objectFillColour = defaultFillColour;
    } else if ((fillColour == "") && (primaryColour != "#000000")){
        objectFillColour = primaryColour;
    } else if (fillColour != "") {
        objectFillColour = fillColour;
    };

    if ((strokeColour == "") && (secondaryColour == "#ffffff")){
        objectStrokeColour = defaultStrokeColour;
    } else if ((strokeColour == "") && (secondaryColour != "#ffffff")){
        objectStrokeColour = secondaryColour;
    } else if (strokeColour != "") {
        objectStrokeColour = strokeColour;
    };

    const _handleAddOval = () => {
        const oval = new fabric.Ellipse({
            ry: 50,
            rx: 75,
            fill: objectFillColour,
            strokeWidth: objectStrokeSize,
            stroke: objectStrokeColour,
        });

        // console.log(oval) // needs ry & rx defined
        canvas.isDrawingMode = false;
        canvas.add(oval);
        canvas.renderAll();
    };
    
    return (
        <> 
            <Button className="add_button paint_common add_oval" onClick= { _handleAddOval } title="Add Oval"></Button>
        </>
    );
};

export default Ellipse;