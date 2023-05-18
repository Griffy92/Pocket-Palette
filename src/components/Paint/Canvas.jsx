import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';
import Toolbar from './Toolbar';
import ContextMenu from './Context-Menu';
import { ThemeProvider, createTheme } from '@mui/material';
import CanvasUpload from './CanvasUpload';


const theme = createTheme({
	palette: {
		primary: {
		  main: "#22A2FF"
		}
	  }
});

const Canvas = () => {
    const [ canvas, setCanvas ] = useState(null);

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            backgroundColor: 'white',
            width: window.innerWidth,
            height: window.innerHeight - 190, // wait for navbar/toolbar component to deduc height
            // stopContextMenu: true,
        });

        // uncomment to get history function to work however you will have to refresh page after saving code.
        if (canvas != null) {
            canvas.historyInit();
        };

        return newCanvas;
    };

    // render canvas on load
    useEffect( () => {
        setCanvas(initCanvas());
    }, []);

    return (
        <> 
            <ThemeProvider theme={theme}>
                <Toolbar canvas={ canvas } />
                <canvas id="canvas" />
                <ContextMenu canvas={ canvas }/>
            </ThemeProvider>
        </>
    );
};

export default Canvas;