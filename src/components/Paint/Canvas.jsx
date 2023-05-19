import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'fabric-history';
import Toolbar from './Toolbar';
import ContextMenu from './Context-Menu';

const theme = createTheme({
	palette: {
		primary: {
		  main: "#22A2FF",
          contrastText: "#ffffff",
          borderColor: "#ffffff",
		}
	  },
      // Non-Palette cusomisation lives here
});

const Canvas = ( props ) => {
    const [ canvas, setCanvas ] = useState(null);
    const { session } = props;
    const navigate = useNavigate();

    // create the canvas object
    const initCanvas = () => { 
        // first argument in fabric.Canvas is html canvas ID
        const newCanvas = new fabric.Canvas('canvas', {
            backgroundColor: 'white',
            width: window.innerWidth,
            height: window.innerHeight - (window.innerHeight * .2), // wait for navbar/toolbar component to deduc height
            // stopContextMenu: true,
        });

        // uncomment to get history function to work however you will have to refresh page after saving code.
        if (canvas != null) {
            canvas.historyInit();
        };
        return newCanvas;
    };

    // render canvas on load
    useEffect ( () => {
        if ( !session ) {
            navigate("/")
        } else {
            setCanvas(initCanvas());
        }
    }, [session]);

    return (
        <> 
            <ThemeProvider theme={theme}>
                <Toolbar canvas={ canvas } />
                <div className="canvas_class">
                    <canvas id="canvas" />
                </div>
                <ContextMenu canvas={ canvas }/>
            </ThemeProvider>
        </>
    );
};

export default Canvas;