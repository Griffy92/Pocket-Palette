import { useState } from 'react';
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';


const Stroke = ( { canvas, setStrokeColour, setStrokeSize } ) => {
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

    const setFlCol = (tarFlCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("fill", tarFlCol);
                console.log(obj, tarFlCol);
            });
            canvas.renderAll();
        }};


    const setStrCol = (tarStrCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("stroke", tarStrCol);
                console.log(obj, tarStrCol);
            });
            canvas.renderAll();
        }};

    const setStrWdth = (tarStrWdth) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("strokeWidth", tarStrWdth)
                console.log(obj, tarStrWdth)
            });
            canvas.renderAll()
        }};

    return (
        <>
            <Button className="add_button paint_common add_stroke_custom" onClick= { _handleClick } title="Set Brush Size"></Button>
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
                <Stack sx={{ p: 2}}>
                    <p>Fill Colour</p>
                    <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) =>{setFlCol(e.target.value)}} title="Set Stroke Colour" />
                    <div>
                        <br />
                        <p>Stroke Width</p>
                        <Slider
                            sx={{ width: 200,
                                my: 2,
                                mx: 2 }}
                            defaultValue={5} 
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={50}
                            width={500}
                            // value={value}
                            onChange={(e) => {setStrokeSize(e.target.value); setStrWdth(e.target.value)}}
                        />
                    </div>
                    <p>Stroke Colour </p>
                    <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) => {setStrokeColour(e.target.value); setStrCol(e.target.value)}} title="Set Stroke Colour" />
                </Stack>
            </Popover>
        </>
    );
};

export default Stroke;
