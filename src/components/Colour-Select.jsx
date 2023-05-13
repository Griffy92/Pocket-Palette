import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { useState } from "react";

const ColourSelect = ( {  setColour } ) => {
    // const { setColour, colour } = props
    return (
        <>
            <input type="color" id="drawing-color" onChange={(e) => setColour(e.target.value)} />
        </>
    )
};

export default ColourSelect;