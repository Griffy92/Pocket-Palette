import React from "react";
import { useDotting } from "dotting";



// Reders under and redo button

const Undo = ( props ) => {
    const { canvas } = props;
    const { undo } = useDotting(canvas);

    return (
        <div> 
        <button onClick={undo} title="Undo" className="undoBtn iconBtn"></button>
    </div>
    )
}

export default Undo;