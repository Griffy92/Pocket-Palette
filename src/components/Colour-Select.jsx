import React from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
// import { useState } from "react";

const ColourSelect = ( { setColour } ) => {
    // const { canvas } = props; // Not sure required
    // console.log(colour)

    return (

        <>
            <input type="color" id="drawing-color" onChange={setColour} />
        </>
    )
};

export default ColourSelect;