import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

const BrushCustom = ( { setBrushSize } ) => {
    // const { canvas, colour } = props
    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined; //This is the only part of this I don't understand https://mui.com/material-ui/react-popover/

    return (
        <>
            <button className="add_button add_brush_size" onClick= { _handleClick }></button>
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
            <div>
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
            </Popover>
        </>
    )
};

export default BrushCustom;
