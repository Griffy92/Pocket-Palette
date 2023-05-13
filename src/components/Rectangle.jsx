import { fabric } from "fabric";

const Rectangle = ( props ) => {
    const { canvas, colour } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'purple'
    if (colour != ""){
        fillColour = colour 
    }

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
        height: 140,
        width: 100,
        fill: fillColour
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    return (
        <>
            <button className="add_button add_rect" onClick={ _handleAddRect }></button>
        </>
    )
};

export default Rectangle;