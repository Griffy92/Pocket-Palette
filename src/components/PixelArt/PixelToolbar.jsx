import React, { useState } from "react";

// COMPONENTS
import Clear from "./PixelToolbar/Clear";
import Download from "./PixelToolbar/Download";
import BrushTool from "./PixelToolbar/BrushTool";
import BrushColor from "./PixelToolbar/BrushColor";
import Undo from "./PixelToolbar/Undo";
import Redo from "./PixelToolbar/Redo";

import './PixelToolbar.css'

const PixelToolbar = ( props ) => {
    const { canvas } = props;
    const [color, setColor ] = useState("");

    return (
        <>
            <div className="pixelTool">
                {/* All toolbar imports */}
                <BrushTool canvas={canvas} />
                <BrushColor canvas={canvas} color={ color } setColour={ setColor } />
                <Clear canvas={ canvas } />
                <Download canvas={ canvas } />
                <Undo canvas={ canvas } /> 
                <Redo canvas={ canvas } />
            </div>
        </>
    );
};

export default PixelToolbar;