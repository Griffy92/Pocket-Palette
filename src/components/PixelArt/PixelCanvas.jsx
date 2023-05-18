import React, { useRef, useState } from "react";
import { Dotting } from "dotting";


// COMPONENTS
import PixelToolbar from './PixelToolbar';
import './PixelCanvas.css'


// Renders the board and toolbar for pixel art
const PixelCanvas = () => {
    // dotting documentation - direct acces to DOM element
    const ref = useRef(null);

    // setting row and column
    const [row, setRow ] = useState(800);
    const [column, setColumn] = useState(800);
    
    // handles row and column changes and converts to a number
    const _handleRowChange = (e) => {
        setRow(Number(e.target.value));
      };
    
      const _handleColumnChange = (e) => {
        setColumn(Number(e.target.value));
      };

    return (
        <div className="pixelContainer">

            <div className="canvasInput">
                {/*  Row input */}
                <label className="pixelTitle" htmlFor="rows">Rows: </label>
                <input
                    className="pixelInput"
                    id="rows"
                    type="number"
                    min="100"
                    value={row}
                    onChange={_handleRowChange}
                />

                {/*  Column input */}
                <label className="pixelTitle" htmlFor="columns">Columns: </label>
                <input
                    className="pixelInput"
                    id="columns"
                    type="number"
                    min="100"
                    value={column}
                    onChange={_handleColumnChange}
                />
            </div>

            
                {/*  Importing the toolbar */}
                <PixelToolbar canvas={ ref } />

                <div className="workingContainer">
                {/*  Rendering the Board */}
                <Dotting 
                    brushTool="DOT"
                    ref={ref} 
                    width={row} 
                    height={column}
                />
            </div>

        </div>
    );
};
  
export default PixelCanvas;
