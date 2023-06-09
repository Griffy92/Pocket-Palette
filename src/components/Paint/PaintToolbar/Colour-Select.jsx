import React from 'react'
import { useState } from 'react';
import { Popover, Stack, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ColourSelect = ( {  canvas, primaryColour, setPrimaryColour, secondaryColour, setSecondaryColour } ) => {

    const [ anchor_col, setAnchor_col] = useState(null);

    const _handleClick_col = (event) => {
        setAnchor_col(event.currentTarget);
    };

    const _handleClose_col = () => {
        setAnchor_col(null);
    };

    const setObjectColour = (tarCol) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                obj.set("fill", tarCol);
            });
            canvas.renderAll();
        }};

    const setSecondColour = (tarCol) => {
        if (canvas != null) {
            canvas.getActiveObjects().forEach((obj) => {
                if (obj.shadow != null){obj.shadow.color = tarCol};
                if (obj.stroke != null){obj.stroke = tarCol};
            });
            canvas.renderAll();
        }};
    
    const _handleResetColour = () => {
        setPrimaryColour("#000000");
        setSecondaryColour("#ffffff");
    }

    const open_col = Boolean(anchor_col);
    const id_col = open_col ? 'simple-popover' : undefined; 

    return (
        <>
            <Button className="add_button paint_common main_colour_button" onClick= { _handleClick_col } title="Main Colours"></Button>
                <Popover
                    id={id_col}
                    open={open_col}
                    anchorEl={anchor_col}
                    style={{ maxWidth: 1000}}
                    onClose={_handleClose_col}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left'}}>
                    <Stack sx={{ width: 370}}>
                    <TableContainer >
                        <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Primary Colour</TableCell>
                                    <TableCell>Secondary Colour</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <input type="color" id="primary-color-picker" value={primaryColour} className="add_button add_colour_select" onChange={(e) => {setPrimaryColour(e.target.value); setObjectColour(e.target.value)}} title="Set Primary Colour" />
                                    </TableCell>
                                    <TableCell>
                                        <input type="color" id="secondary-color-picker" value={secondaryColour} className="add_button add_colour_select" onChange={(e) => {setSecondaryColour(e.target.value); setSecondColour(e.target.value)}} title="Set Secondary Colour" />    
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}> 
                                    <p className='dropdown_menu'>Colours selected will apply to new shapes, drawings and text.</p>
                                    <p className='dropdown_menu'>These colours will overwrite the existing default colours.</p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}> 
                                    <p className='dropdown_menu'>When placed, text objects will inherit the primary colour and use the secondary as shadow. This can be changed if the text is selected and the colour updated.</p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick= { _handleResetColour } title="Main Colours"> Reset to Default </Button>
                    </Stack>
                </Popover>
        </>
    );
};

export default ColourSelect;