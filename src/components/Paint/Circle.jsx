import { fabric } from 'fabric'

const Circle = ( props ) => {
    const { canvas, colour, strokeColour, strokeSize } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'red'
    if (colour != ""){
        fillColour = colour 
    }

    const _handleAddCircle = () => {
        const circle = new fabric.Circle({
            radius: 50,
            fill: fillColour,
            strokeWidth: strokeSize,
            stroke: strokeColour
        });
        // console.log(circle); // circle needs radius define
        canvas.isDrawingMode = false
        canvas.add(circle);
        canvas.renderAll();
    };

    return (
        <>
            <button className="add_button add_circle" onClick={ _handleAddCircle } title="Add Circle"></button>
        </>
    )
};

export default Circle;
