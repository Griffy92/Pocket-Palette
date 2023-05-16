import React from "react";
import { useDotting } from "dotting";

// Renders clear button to clear the board

const Clear = ( props ) => {
    const { canvas } = props;
    const { clear } = useDotting( canvas );

    return (
        <>
            <button onClick={clear}>Clear</button>
        </>
    )
}

export default Clear;