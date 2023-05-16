import React from "react";
import {  useDotting } from "dotting";

// Renders the download button. Allows to download as PNG

const Download = ( props ) => {
    const { canvas } = props;
    const { downloadImage } = useDotting( canvas );

    return (
        <button onClick={downloadImage}>Download</button> 
    )
};

export default Download;