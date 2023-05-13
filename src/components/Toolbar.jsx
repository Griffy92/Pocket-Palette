import { useState } from 'react'
import Circle from './Circle';
import Ellipse from './Ellipse';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import FreeDraw from './Free-Draw';
import ColourSelect from './Colour-Select';


const Toolbar = ( props ) => {
    const [ colour, setColour] = useState("");

    const { canvas } = props;
    
    return (
        <>
            <div>
                <div className="toolbar">
                    <Circle canvas={ canvas } />
                    <Ellipse canvas={ canvas } />
                    <Rectangle canvas={ canvas } />
                    <Triangle canvas={ canvas } /> 
                    <FreeDraw canvas={ canvas } colour={ colour }/>
                    <ColourSelect onChange={ setColour }/>
                </div>
                <br />
            </div>
        </>
    )
};

export default Toolbar;