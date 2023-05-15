import React from 'react'
import Popover from '@mui/material/Popover';

const FreeDraw = ( props ) => {
    console.log(props)
    const { canvas, colour, brushSize } = props
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'grey'
    let fillBrushSize = 5
    if (colour != ""){
        fillColour = colour 
    };

    if (brushSize > 0){
        fillBrushSize = brushSize
    };

    const _handleAddFreeDraw = () => {
        canvas.freeDrawingBrush.color = fillColour
        canvas.freeDrawingBrush.width = fillBrushSize
        canvas.isDrawingMode = !canvas.isDrawingMode     
    };


    ////////////////////////////////////// This shit does not work - and I honestly cannot fix it.
    // const _handleAddFreeEraser = () => {
    //     canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    //     canvas.isDrawingMode = true;
    // };
    
    return (
        <>
            <button className="add_button add_free_draw" onClick= { _handleAddFreeDraw } title="Draw"></button>
            {/* <button className="add_button add_free_draw" onClick= { _handleAddFreeEraser } title="Draw"></button> */}
        </>
    )
};

export default FreeDraw;
