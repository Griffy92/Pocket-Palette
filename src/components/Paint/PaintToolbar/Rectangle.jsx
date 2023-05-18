import { fabric } from "fabric";
import { Button } from '@mui/material';

const Rectangle = ( props ) => {
    const { canvas, primaryColour, secondaryColour, strokeColour, strokeSize, fillColour } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let defaultFillColour = '#FC8662';
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

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
            height: 140,
            width: 100,
            fill: objectFillColour,
            strokeWidth: objectStrokeSize,
            stroke: objectStrokeColour,
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