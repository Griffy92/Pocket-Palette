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



const Toolbar = ( props ) => {
    const [ colour, setColour] = useState("");
    const [ brushSize, setBrushSize] = useState(0);

    const { canvas } = props;
    
    return (
        <>
            <div>
                <div className="toolbar">
                    <Circle canvas={ canvas } colour={ colour } />
                    <Ellipse canvas={ canvas } colour={ colour }/>
                    <Rectangle canvas={ canvas } colour={ colour }/>
                    <Triangle canvas={ canvas } colour={ colour }/> 
                    <FreeDraw canvas={ canvas } colour={ colour } brushSize={ brushSize }/>
                    <BrushCustom setBrushSize={ setBrushSize } brushSize={ brushSize }/>
                    <ColourSelect setColour={ setColour } colour={ colour } />
                    <Text canvas={canvas} colour={ colour } />
                    <RemoveObject canvas={ canvas }/>
                    <CanvasHistory canvas={ canvas }/>
                    <CopyPaste canvas={ canvas }/>
                </div>
                <br />
            </div>
        </>
    );
};

export default Toolbar;