import React, { useCallback } from "react";
import { useBrush } from "dotting";
import { SketchPicker } from 'react-color'

const BrushColor = ( props ) => {
    const { canvas } = props;
    const { changeBrushColor, brushColor } = useBrush( canvas );

    // handle color change
    const _handleColorChange = useCallback((e) => {
        changeBrushColor(e.target.value);
      }, [changeBrushColor]);

    return (
        // select color change
        <input
            className="colorBtn iconBtn"
            type="color"
            value={ brushColor }
            onChange={_handleColorChange}
        />
    )
}

export default BrushColor;