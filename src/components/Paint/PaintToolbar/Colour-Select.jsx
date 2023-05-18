import React from 'react'
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

// import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
// import { useState } from "react";

const ColourSelect = ( {  canvas, setColour } ) => {
    const setObjectColour = (tarCol) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("fill", tarCol);
            });
            canvas.renderAll();
        }};

    // const { setColour, colour } = props
    return (
        <>
            <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) => {setColour(e.target.value); setObjectColour(e.target.value)}} title="Set Colour" />
        </>
    );
};

export default ColourSelect;