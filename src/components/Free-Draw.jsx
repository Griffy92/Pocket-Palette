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
            <button onClick= { _handleAddFreeDraw }>Draw!</button>
        </>
    )
};

export default FreeDraw;
