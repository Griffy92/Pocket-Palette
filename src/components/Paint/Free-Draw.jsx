import React from 'react'
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';


const FreeDraw = ( props ) => {
    const { canvas, colour, brushSize } = props;

    // if (canvas != null){
    //     canvas.isDrawingMode = false
    //   };

    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'grey';
    let fillBrushSize = 5;
    
    if (colour != ""){
        fillColour = colour;
    };

    if (brushSize > 0){
        fillBrushSize = brushSize;
    }; 
    
    const _handleAddFreeDraw = () => {
        canvas.freeDrawingBrush.color = fillColour;
        canvas.freeDrawingBrush.width = fillBrushSize;
        canvas.isDrawingMode = !canvas.isDrawingMode;
        // isDrawOn() 
        // FreeDraw(props)
        // console.log(isDrawOn())     
    };

    ////////////////////////////////////// This shit does not work - and I honestly cannot fix it.
    // const _handleAddFreeEraser = () => {
    //     canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    //     canvas.isDrawingMode = true;
    // }:

    // const isDrawOn = () => {
    //     if ((canvas != null) && canvas.isDrawingMode) {
    //         return "active_tool_icon"
    //     }
    //     return ""
    // }

    // console.log(isDrawOn())


    return (
        <>
            <Button className={`add_button add_free_draw`} onClick={ _handleAddFreeDraw } style={{ borderColor: "grey" }} title="Free Draw"></Button>
            {/* <button className="add_button add_free_draw" onClick= { _handleAddFreeEraser } title="Draw"></button> */}
        </>
    );
};

export default FreeDraw;
