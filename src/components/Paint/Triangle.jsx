import { fabric } from 'fabric'
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Triangle = ( props ) => {
    const { canvas, colour, strokeColour, strokeSize } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'blue'
    if (colour != ""){
        fillColour = colour 
    };

    const _handleAddTri = () => {
        const tri = new fabric.Triangle({
            width: 20,
            height: 30,
            fill: fillColour,
            strokeWidth: strokeSize,
            stroke: strokeColour,
            left: 50,
            top: 50
        });
        canvas.isDrawingMode = false
        canvas.add(tri).renderAll()
        }
    
    return (
        <>
            <Button className="add_button add_tri" onClick={ _handleAddTri } title="Add Triangle"></Button>
        </>
    )
};

export default Triangle;