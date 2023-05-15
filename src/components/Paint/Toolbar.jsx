import { useState } from 'react'
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

const Toolbar = ( props ) => {
    const [ colour, setColour ] = useState("");
    const [ strokeColour, setStrokeColour ] = useState("")
    const [ brushSize, setBrushSize] = useState(0);
    const [ strokeSize, setStrokeSize ] = useState("")

    const { canvas } = props;

    return (
        <>
            <div>
                <div className="toolbar">
                    <Circle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize } />
                    <Ellipse canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize } />
                    <Rectangle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize }/>
                    <Triangle canvas={ canvas } colour={ colour } strokeColour={ strokeColour } strokeSize={ strokeSize }/> 
                    <Stroke canvas={ canvas } setStrokeColour={ setStrokeColour } strokeColour={ strokeColour } setStrokeSize={ setStrokeSize } strokeSize={ strokeSize } />
                    <FreeDraw canvas={ canvas } colour={ colour } brushSize={ brushSize }/>
                    <BrushCustom setBrushSize={ setBrushSize } brushSize={ brushSize } />
                    <ColourSelect canvas={ canvas } setColour={ setColour } colour={ colour } />
                    <Text canvas={canvas} colour={ colour } />
                    <RemoveObject canvas={ canvas }/>
                    <CanvasHistory canvas={ canvas }/>
                    <CopyPaste canvas={ canvas }/>
                    <Pan canvas={ canvas } />
                    <Zoom canvas={canvas} />
                    <Layers canvas={canvas}/>
                    <Serialisation canvas={canvas} />
                    <Deserialisation canvas={canvas} /> 
                    <SVGExport canvas={canvas} />
                </div>
                <br />
            </div>
        </>
    );
};

export default Toolbar;