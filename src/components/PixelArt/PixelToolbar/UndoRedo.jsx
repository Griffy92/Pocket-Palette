import React from "react";
import { useDotting } from "dotting";


// Reders under and redo button

const UndoRedo = ( props ) => {
    const { canvas } = props;
    const { undo, redo } = useDotting(canvas);

    return (
        <div> 
        <button onClick={undo} title="Undo" className="undoBtn"></button>
        <button onClick={redo}>Redo</button>
    </div>
    )
}

export default UndoRedo;