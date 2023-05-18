import { useState } from 'react';
import { Popover, Stack, ButtonGroup, Button, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Stroke = ( { canvas, setStrokeColour, strokeColour, setStrokeSize, strokeSize, setFillColour, fillColour} ) => {
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

    const _setFillColour = (tarFlCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("fill", tarFlCol);
            });
            canvas.renderAll();
        }};

    const _setStrokeColour = (tarStrCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("stroke", tarStrCol);
            });
            canvas.renderAll();
        }};

    const _setStrokeSize = (tarStrWdth) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("strokeWidth", tarStrWdth)
            });
            canvas.renderAll()
        }};

    const _handleResetShape = () => {
        setStrokeColour("");
        setStrokeSize(0)
        setFillColour("")
    }

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
                <Stack sx={{ width: 370}}>
                    <TableContainer >
                        <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Fill Colour</TableCell>
                                    <TableCell>Stroke Colour</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <input type="color" id="color-picker" value={fillColour} className="add_button add_colour_select" onChange={(e) =>{_setFillColour(e.target.value); setFillColour(e.target.value)}} title="Set fill Colour" />

                                    </TableCell>
                                    <TableCell>
                                        <input type="color" id="color-picker" value={strokeColour} className="add_button add_colour_select" onChange={(e) => {_setStrokeColour(e.target.value); setStrokeColour(e.target.value)}} title="Set Stroke Colour" />
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell colSpan={2}>
                                    Stroke Width
                                        <Slider
                                            defaultValue={5} 
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={50}
                                            width={500}
                                            // value={value}
                                            onChange={(e) => {_setStrokeSize(e.target.value); setStrokeSize(e.target.value)}}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell colSpan={2}> 
                                    <p className='dropdown_menu'>These colours will be applied to any selected objects, and all future objects.
                                        This changes will overwrite any specified "Main Colours".</p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                        </TableContainer>
                    <Button fullWidth={true} onClick= { _handleResetShape } title="Main Colours"> Reset to Default </Button>
                </Stack>
            </Popover>
        </>
    );
};

export default Stroke;
