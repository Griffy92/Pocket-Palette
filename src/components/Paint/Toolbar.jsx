import { useState } from 'react';
import { Popover, Stack, ButtonGroup, Button } from '@mui/material';
import Circle from './PaintToolbar/Circle';
import Ellipse from './PaintToolbar/Ellipse';
import Rectangle from './PaintToolbar/Rectangle';
import Triangle from './PaintToolbar/Triangle';
import FreeDraw from './PaintToolbar/Free-Draw';
import ColourSelect from './PaintToolbar/Colour-Select';
import Text from './PaintToolbar/Text';
import RemoveObject from './PaintToolbar/Remove-Object';
import CanvasHistory from './PaintToolbar/Canvas-History';
import CopyPaste from './PaintToolbar/Copy-Paste';
import BrushCustom from './PaintToolbar/Brush-Custom';
import Pan from './PaintToolbar/Pan';
import Zoom from './PaintToolbar/Zoom';
import Layers from './PaintToolbar/Layers';
import Stroke from './PaintToolbar/Stroke';
import Serialisation from './PaintToolbar/Serialisation';
import Deserialisation from './PaintToolbar/Deserialisation';
import SVGExport from './PaintToolbar/SVGExport';
import CanvasDownload from './PaintToolbar/CanvasDownload';
import ImageUpload from './PaintToolbar/Image-Upload';
import Grouping from './PaintToolbar/Grouping';
import ImageFilter from './PaintToolbar/Image-Filter';
import CanvasUpload from './CanvasUpload';

import './PaintToolbar.css'

const Toolbar = ( props ) => {
    const [ colour, setColour ] = useState("");
    const [ strokeColour, setStrokeColour ] = useState("");
    const [ brushSize, setBrushSize] = useState(0);
    const [ strokeSize, setStrokeSize ] = useState("");
    const { canvas } = props;

    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const _handleClose = () => {
        setAnchor(null);
    };
    
    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined; 

    return (
        <>
            <div>
                <div className="toolbar">
                    <Circle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize } />
                    <Ellipse canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize } />
                    <Rectangle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize }/>
                    <Triangle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize }/> 
                    <Stroke canvas={ canvas } setStrokeColour={ setStrokeColour } strokeColour={ strokeColour } setStrokeSize={ setStrokeSize } strokeSize={ strokeSize } />
                    <ButtonGroup variant="text" style={{display: "inline"}}>
                        <FreeDraw canvas={ canvas } colour={ colour } brushSize={ brushSize }  />
                        <BrushCustom canvas={ canvas } setBrushSize={ setBrushSize } brushSize={ brushSize } />
                    </ButtonGroup>
                    <ColourSelect canvas={ canvas } setColour={ setColour } colour={ colour } />
                    <Text canvas={canvas} colour={ colour } />
                    <RemoveObject canvas={ canvas }/>
                    <Pan canvas={ canvas } />
                    <CanvasHistory canvas={ canvas }/>
                    <Zoom canvas={ canvas } />
                    <Layers canvas={ canvas }/>
                    <Grouping canvas={canvas}/>
                    <Serialisation canvas={ canvas } />
                    <Deserialisation canvas={ canvas } />
                    <ImageFilter canvas={ canvas } colour={ colour } />
                    <ImageUpload canvas={ canvas } colour={ colour } />
                    <CopyPaste canvas={canvas} />
                    <Button className="add_button paint_common download_button" onClick= { _handleClick } title="Export"></Button>
                        <Popover
                            sx={{ width: 500 }}
                            id={id}
                            open={open}
                            anchorEl={anchor}
                            style={{ maxWidth: 1000}}
                            onClose={_handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left'}}>
                            <Stack sx={{ width: 300, p: 2}}>
                                <p>Local Download</p>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth={true} sx={{my: 2}}>
                                    <SVGExport canvas={canvas} />
                                    <CanvasDownload canvas={canvas} />
                                </ButtonGroup>
                            </Stack>
                            <Stack sx={{ width: 300, p: 2}}>
                                <p>Upload to Cloud</p>
                                    <CanvasUpload canvas={canvas}/>
                            </Stack>
                        </Popover>
                </div>
                <br />
            </div>
            <br />
        </>
    );
};

export default Toolbar;