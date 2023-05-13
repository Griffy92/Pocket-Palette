import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

const FreeDraw = ( props ) => {
    const { canvas } = props;
    const _handleAddFreeDraw = () => {
        canvas.isDrawingMode = !canvas.isDrawingMode
        console.log("Toggle Drawng Mode")
       
    };
    return (
        <>
            <button onClick= { _handleAddFreeDraw }>Draw!</button>
        </>
    )
};

export default FreeDraw;
