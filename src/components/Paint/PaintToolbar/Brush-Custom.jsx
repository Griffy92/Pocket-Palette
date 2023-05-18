import { useState } from 'react';
import { Popover, Stack, Button, Slider } from '@mui/material';

const BrushCustom = ( { canvas, setBrushSize } ) => {
    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined;

    const setStrCol = (tarStrCol) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("stroke", tarStrCol);
                console.log(obj, tarStrCol);
            });
            canvas.renderAll();
        };
    };

    return (
        <>
            <Button variant="text" className="add_button add_brush_size" onClick= { _handleClick } title="Set Brush Size" sx={{width: 2, p: 1.5}} style={{minWidth: '10px'}}></Button>
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
                            <span className="slider-label">Brush Size</span>
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
                                onChange={(e) => setBrushSize(e.target.value)}
                            />
                        </div>
                    </Stack>
                </Popover>
        </>
    );
};

export default BrushCustom;
