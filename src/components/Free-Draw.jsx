import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

const FreeDraw = ( props ) => {
    console.log(props)
    const { canvas, colour } = props
    const _handleAddFreeDraw = () => {
        canvas.freeDrawingBrush.color = colour
        canvas.isDrawingMode = !canvas.isDrawingMode
        console.log("Toggle Drawng Mode")
        console.log(props.colour)
       
    };
    return (
        <>
            <button className="add_button add_free_draw"onClick= { _handleAddFreeDraw }></button>
        </>
    )
};

export default FreeDraw;
