import React, { useState } from "react";

// COMPONENTS
import Clear from "./PixelToolbar/Clear";
import UndoRedo from "./PixelToolbar/UndoRedo";
import Download from "./PixelToolbar/Download";
import BrushTool from "./PixelToolbar/BrushTool";
import BrushColor from "./PixelToolbar/BrushColor";

const PixelToolbar = ( props ) => {
    const { canvas } = props;
    const [color, setColor ] = useState("");

    return (
        <>
            {/* All toolbar imports */}
            <BrushTool canvas={canvas} />
            <BrushColor canvas={canvas} color={ color } setColour={ setColor } />
            <Clear canvas={ canvas } />
            <UndoRedo canvas={ canvas } />
            <Download canvas={ canvas } />
        </>
    )
}

export default PixelToolbar;