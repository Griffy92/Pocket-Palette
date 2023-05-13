import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

const FreeDraw = ( props ) => {
    const { canvas, colour } = props
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'grey'
    if (colour != ""){
        fillColour = colour 
    }

    const _handleAddFreeDraw = () => {
        canvas.freeDrawingBrush.color = fillColour
        canvas.isDrawingMode = !canvas.isDrawingMode     
    };
    
    return (
        <>
            <button className="add_button add_free_draw" onClick= { _handleAddFreeDraw }></button>
        </>
    )
};

export default FreeDraw;
