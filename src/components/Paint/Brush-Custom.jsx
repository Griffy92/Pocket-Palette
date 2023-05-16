import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Slider from '@mui/material/Slider';
import { Stack } from '@mui/material';

const BrushCustom = ( { canvas, setBrushSize } ) => {
    // const { canvas, colour } = props
    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        // canvas.isDrawingMode = false
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined; //This is the only part of this I don't understand https://mui.com/material-ui/react-popover/

    const setStrCol = (tarStrCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
            obj.set("stroke", tarStrCol)
            console.log(obj, tarStrCol)
            });
            canvas.renderAll()
        }};

    return (
        <>
            <button className="add_button add_brush_size" onClick= { _handleClick } title="Set Brush Size"></button>
            <Popover
                sx={{ width: 500 }}
                id={id}
                open={open}
                anchorEl={anchor}
                style={{ maxWidth: 1000}}
                onClose={_handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
            <Stack 
                sx={{ p: 2}}>
            <p>Fill Colour</p>
            <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) =>{setStrCol(e.target.value)}} title="Set Stroke Colour" />
            <div>
                <br />
                <span className="slider-label">Brushsize</span>
                <Slider
                    sx={{ width: 200,
                        my: 2,
                        mx: 2 }}
                    defaultValue={5} 
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={100}
                    width={500}
                    // value={value}
                    onChange={(e) => setBrushSize(e.target.value)}
                />
            </div>
            </Stack>
            </Popover>
        </>
    )
};

export default BrushCustom;
