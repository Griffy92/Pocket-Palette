import React, { useRef, useState } from "react";
import { Dotting } from "dotting";


// COMPONENTS
import PixelToolbar from './PixelToolbar';

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
        <div>

            {/*  Row input */}
            <div>
                <label htmlFor="rows">Rows:</label>
                <input
                    id="rows"
                    type="number"
                    min="100"
                    value={row}
                    onChange={_handleRowChange}
                />
            </div>

            {/*  Column input */}
            <div>
                <label htmlFor="columns">Columns:</label>
                <input
                    id="columns"
                    type="number"
                    min="100"
                    value={column}
                    onChange={_handleColumnChange}
                />
            </div>

            {/*  Importing the toolbar */}
            <PixelToolbar canvas={ ref } />

            {/*  Rendering the Board */}
            <Dotting 
                className="pixel-board"
                ref={ref} 
                width={row} 
                height={column}
                isGridVisible
            />

        </div>
    );
};
  
export default PixelCanvas;
