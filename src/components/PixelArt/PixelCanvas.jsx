// import { fabric } from 'fabric';
import { useState, useEffect } from 'react';
// import 'fabric-history';



import Grid from './Grid';
import PixelToolbar from './PixelToolbar';


const PixelCanvas = () => {


    return (
        <>
            <Grid />
            <PixelToolbar />
        </>
    );
};

export default PixelCanvas;