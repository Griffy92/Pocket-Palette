import React, { useRef, useCallback } from "react";
// import './Grid.css';

import { Dotting, useDotting } from "dotting";
import { useBrush } from "dotting";



// TODO SEPARATE INTO DIFFERENT COMPONENTS AND LINK BACK 



const Grid = () => {
    
    {/* CLEAR BUTTON AND CREATING THE BOARD */}
    const ref = useRef(null);
    const { clear } = useDotting(ref);

    {/* UNDO AND REDO */}
    const { undo, redo } = useDotting(ref);

     {/* DOWNLOAD IMAGE AS PNG */}
     const { downloadImage } = useDotting(ref);
  
    
    {/* CHANGE BRUSH TOOL COLOR */}

    const { changeBrushColor, changeBrushTool, brushTool, brushColor } = useBrush(ref);


    const _handleBrushToolChange = useCallback((selectedTool) => {
        changeBrushTool(selectedTool);
      }, [changeBrushTool]);



    const _handleColorChange = useCallback((e) => {
        changeBrushColor(e.target.value);
      }, [changeBrushColor]);


    const BrushTool = {
    DOT: "DOT",
    ERASER: "ERASER",
    PAINT_BUCKET: "PAINT_BUCKET"
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

            <button onClick={downloadImage}>Download</button>
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

        


           {/* CHANGE BRUSH TYPE  */}
        <div>
          <button onClick={() => _handleBrushToolChange(BrushTool.DOT)}
            disabled={brushTool === BrushTool.DOT}> Paint </button>
          <button onClick={() => _handleBrushToolChange(BrushTool.ERASER)}
            disabled={brushTool === BrushTool.ERASER}> Eraser </button>
          <button onClick={() => _handleBrushToolChange(BrushTool.PAINT_BUCKET)}
            disabled={brushTool === BrushTool.PAINT_BUCKET}> Paint Bucket</button>
          </div>

          {/* CHANGE BRUSH COLOR  */}
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