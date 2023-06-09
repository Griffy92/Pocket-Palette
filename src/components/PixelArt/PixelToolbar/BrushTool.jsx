import React, { useCallback } from "react";
import { useBrush } from "dotting";

// Renders brush tools -> dot(brush), eraser and paint bucket (fill)

const BrushTool = ( props ) => {

    const { canvas } = props;
    const { changeBrushTool, brushTool } = useBrush( canvas );

    // Object representing different brush tools
    const BrushTool = {
        DOT: "DOT",
        ERASER: "ERASER",
        PAINT_BUCKET: "PAINT_BUCKET"
        };

    const _handleBrushToolChange = useCallback((selectedTool) => {
        changeBrushTool(selectedTool);
      }, [changeBrushTool]);

    return (
        <>
            {/* BRUSH */}
            <button className="paintBtn iconBtn" onClick={() => _handleBrushToolChange(BrushTool.DOT)} disabled={brushTool === BrushTool.DOT} title="Paint"></button>
            
            {/* ERASER */}
            <button className="eraserBtn iconBtn" onClick={() => _handleBrushToolChange(BrushTool.ERASER)} disabled={brushTool === BrushTool.ERASER} title="Eraser"></button>
            
            {/* FILL */}
            <button className="fillBtn iconBtn" onClick={() => _handleBrushToolChange(BrushTool.PAINT_BUCKET)} disabled={brushTool === BrushTool.PAINT_BUCKET} title="Fill"></button>
          </>
    )
}

export default BrushTool;