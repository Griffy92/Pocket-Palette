import React from "react";
import {  useDotting } from "dotting";

// Renders the download button. Allows to download as PNG

const Download = ( props ) => {
    const { canvas } = props;
    const { downloadImage } = useDotting( canvas );

    return (
        <button className="downloadBtn iconBtn" title="Download PNG" onClick={downloadImage}></button> 
    )
};

export default Download;