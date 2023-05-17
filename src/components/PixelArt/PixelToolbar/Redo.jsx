import React from "react";
import { useDotting } from "dotting";


// Reders under and redo button

const Redo = ( props ) => {
    const { canvas } = props;
    const { redo } = useDotting(canvas);

    return (
        <div> 
        <button onClick={redo} title="Redo" className="redoBtn iconBtn"></button>
    </div>
    )
}

export default Redo;