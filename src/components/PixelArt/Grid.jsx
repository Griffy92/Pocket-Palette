import React, { useRef, useCallback } from "react";
import './Grid.css';

import { Dotting, useDotting, useBrush } from "dotting";


// TODO SEPARATE INTO DIFFERENT COMPONENTS AND LINK BACK 



const Grid = () => {
    
    {/* CLEAR BUTTON AND CREATING THE BOARD */}

    const ref = useRef(null);
    const { clear } = useDotting(ref);

    {/* UNDO AND REDO */}
    const { undo, redo } = useDotting(ref);

    
    {/* CHANGE BRUSH TOOL COLOR */}

    const { changeBrushColor, changeBrushTool, brushTool, brushColor } = useBrush(ref);


    const _handleColorChange = useCallback((e) => {
        changeBrushColor(e.target.value);
      }, [changeBrushColor]);


    const BrushTool = {
    DOT: "DOT",
    ERASER: "ERASER",
    PAINT_BUCKET: "PAINT_BUCKET",
    SELECT: "SELECT",
    };
    

    return (
        <div>
           {/* <Dotting width={500} height={500} /> */}
           <Dotting 
           className="pixel-board"
           ref={ref} 
           width={800} 
           height={800}
           isGridVisible
           />

            <button onClick={clear}>Clear</button>

            {/* UNDO AND REDO BUTTONS */}
            <div> 
        <button
          style={{
            padding: "5px 10px",
            background: "none",
          }}
          onClick={undo}
        >
          undo
        </button>
        <button
          style={{
            padding: "5px 10px",
            background: "none",
          }}
          onClick={redo}
        >
          redo
        </button>




           {/* CHANGE BRUSH COLOR  */}
           <span>Brush Mode</span>
        <select
          style={{
            marginLeft: 15,
          }}
          value={BrushTool}
          onChange={(e) => {
            changeBrushTool(e.target.value);
          }}
        >
          <option value={BrushTool.DOT}>{BrushTool.DOT}</option>
          <option value={BrushTool.ERASER}>{BrushTool.ERASER}</option>
          <option value={BrushTool.PAINT_BUCKET}>
            {BrushTool.PAINT_BUCKET}
          </option>
          <option value={BrushTool.SELECT}>{BrushTool.SELECT}</option>
        </select>

        <input
          type="color"
          value={brushColor}
          onChange={_handleColorChange}
        />


      </div>

     

      
        </div>
    )
}


  export default Grid;