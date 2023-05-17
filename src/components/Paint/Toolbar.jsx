import { useState } from 'react'
import { Popover, Stack, ButtonGroup, Button } from '@mui/material';
import Circle from './Circle';
import Ellipse from './Ellipse';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import FreeDraw from './Free-Draw';
import ColourSelect from './Colour-Select';
import Text from './Text';
import RemoveObject from './Remove-Object';
import CanvasHistory from './Canvas-History';
import CopyPaste from './Copy-Paste';
import BrushCustom from './Brush-Custom';
import Pan from './Pan';
import Zoom from './Zoom';
import Layers from './Layers';
import Stroke from './Stroke';
import Serialisation from './Serialisation';
import Deserialisation from './Deserialisation';
import SVGExport from './SVGExport';
import CanvasDownload from './CanvasDownload';
import ImageUpload from './Image-Upload';
import Grouping from './Grouping';
import CanvasUpload  from './CanvasUpload'

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
                    <ButtonGroup variant="text" >
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
                    <Serialisation canvas={ canvas } />
                    <Deserialisation canvas={ canvas } />
                    <ImageUpload canvas={ canvas } colour={ colour } />
                    <CopyPaste canvas={canvas} />
                    <Button className="add_button download_button" onClick= { _handleClick } title="Download"></Button>
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
                                <p>Please select your preferred format</p>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth={true} sx={{my: 2}}>
                                    <SVGExport canvas={canvas} />
                                    <CanvasDownload canvas={canvas} />
                                    <CanvasUpload canvas={canvas} />
                                </ButtonGroup>
                            </Stack>
                        </Popover>
                    <Grouping canvas={canvas}/>
                </div>
                <br />
            </div>
        </>
    );
};

export default Toolbar;