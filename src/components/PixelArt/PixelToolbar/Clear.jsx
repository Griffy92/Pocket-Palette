import React from "react";
import { useDotting } from "dotting";

// Renders clear button to clear the board

const Clear = ( props ) => {
    const { canvas } = props;
    const { clear } = useDotting( canvas );

    return (
        <>
            <button className="clearBtn iconBtn" title="Clear Board" onClick={clear}></button>
        </>
    )
}

export default Clear;