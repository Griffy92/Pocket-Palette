import { fabric } from 'fabric'
import { Button } from '@mui/material';

const Triangle = ( props ) => {
    const { canvas, primaryColour, secondaryColour, strokeColour, strokeSize, fillColour } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let defaultFillColour = '#02C3A9';
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

    const _handleAddTri = () => {
        const tri = new fabric.Triangle({
            width: 60,
            height: 60,
            fill: objectFillColour,
            strokeWidth: objectStrokeSize,
            stroke: objectStrokeColour,
            left: 50,
            top: 50
        });
        canvas.isDrawingMode = false;
        canvas.add(tri).renderAll();
    };
    
    return (
        <>
            <Button className="add_button paint_common add_tri" onClick={ _handleAddTri } title="Add Triangle"></Button>
        </>
    );
};

export default Triangle;