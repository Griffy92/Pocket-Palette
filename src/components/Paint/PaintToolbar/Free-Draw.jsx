import React from 'react'
import { useState } from 'react';
import { Popover, Stack, ButtonGroup, Button, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const FreeDraw = ( { canvas, primaryColour, secondaryColour, setBrushColour, brushColour, setBrushSize, brushSize } ) => {
    const [ anchor, setAnchor] = useState(null);

    let defaultBrushColour = '#1947E5';
    let defaultBrushSize = 4;
    let drawFillColour = "";
    let drawBrushSize = brushSize;
    let drawBrushColour = brushColour;

    if ((brushColour == "") && (primaryColour == "#000000")){
        drawBrushColour = defaultBrushColour;
        console.log('Using Default brush Colour' + drawBrushColour)
    } else if ((brushColour == "") && (primaryColour != "#000000")){
        drawBrushColour = primaryColour;
        console.log('Using Primary Colour')
    } else if (brushColour != "") {
        drawBrushColour = brushColour;
        console.log('Using Fill Colour' + drawBrushColour)
    };

    if ((drawBrushSize == 0)){
        drawBrushSize = defaultBrushSize;
        console.log('Using Default brush size of ' + drawBrushSize)
    };

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
        _handleAddFreeDraw();
        _handleAddFreeDraw();
    };

    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined;

    const _setBrushColour = (tarStrCol) => {
        console.log(tarStrCol)
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("stroke", tarStrCol);
                console.log(obj, tarStrCol);
            });
            canvas.renderAll();
        };
    };
    
    const _handleAddFreeDraw = () => {
        console.log(drawBrushColour + brushSize)
        canvas.freeDrawingBrush.color = drawBrushColour;
        canvas.freeDrawingBrush.width = drawBrushSize;
        canvas.isDrawingMode = !canvas.isDrawingMode;
    };

    const _handleResetBrush = () => {
        setBrushColour("#1947E5");
        // setSecondaryColour("");
    }

    const _setFillColour = (tarFlCol) => {
        if (canvas != null){
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("fill", tarFlCol);
                console.log(obj, tarFlCol);
            });
            canvas.renderAll();
        }};

    return (
        <>
            <Button className={`add_button paint_common add_free_draw`} onClick={ _handleAddFreeDraw } style={{ borderColor: "grey" }} title="Free Draw"></Button>
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
                    <Stack sx={{ width: 370}}>
                        <TableContainer >
                            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Brush Colour</TableCell>
                                        <TableCell>Fill Colour</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                        <input type="color" id="color-picker" value={drawBrushColour} className="add_button add_colour_select" onChange={(e) =>{_setBrushColour(e.target.value); setBrushColour(e.target.value)}} title="Set Stroke Colour" />
                                        </TableCell>
                                        <TableCell>
                                        <input type="color" id="color-picker" className="add_button add_colour_select" onChange={(e) =>{_setFillColour(e.target.value); setBrushColour(e.target.value)}} title="Set Stroke Colour" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell colSpan={2}>
                                        Brush Size
                                        <Slider
                                            value={brushSize} 
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={100}
                                            width={500}
                                            onChange={(e) => {setBrushSize(e.target.value)}}
                                        />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell colSpan={2}> 
                                        <p className='dropdown_menu'>These colours will be applied to any selected drawing objects, and all future drawing objects.</p>
                                        <p className='dropdown_menu'>This changes will overwrite any specified "Main Colours".</p>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell colSpan={2}> 
                                        <p className='dropdown_menu'>NB: You may 'fill' a shape made with the free-draw tool, by selecting the object and setting the fill colour above.</p>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button fullWidth={true} onClick= { _handleResetBrush } title="Main Colours"> Reset to Default </Button>
                    </Stack>
                </Popover>
        </>
    );
};

export default FreeDraw;
