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



const Toolbar = ( props ) => {
    const [ colour, setColour] = useState("");

    const { canvas } = props;
    
    return (
        <>
            <div>
                <div className="toolbar">
                    <Circle canvas={ canvas } colour={ colour } />
                    <Ellipse canvas={ canvas } colour={ colour }/>
                    <Rectangle canvas={ canvas } colour={ colour }/>
                    <Triangle canvas={ canvas } colour={ colour }/> 
                    <FreeDraw canvas={ canvas } colour={ colour }/>
                    <ColourSelect setColour={ setColour } colour={ colour }/>
                    <Text canvas={canvas} colour={ colour } />
                    <RemoveObject canvas={ canvas }/>
                    <CanvasHistory canvas={ canvas }/>
                </div>
                <br />
            </div>
        </>
    )
};

export default Toolbar;