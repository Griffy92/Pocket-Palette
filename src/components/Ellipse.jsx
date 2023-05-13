import { fabric } from 'fabric'

const Ellipse = ( props ) => {

    const { canvas, colour } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'yellow'
    if (colour != ""){
        fillColour = colour 
    }
    const _handleAddOval = () => {
        const oval = new fabric.Ellipse({
            ry: 50,
            rx: 75,
            fill: fillColour
        });

        // console.log(oval) // needs ry & rx defined
        canvas.add(oval);
        canvas.renderAll();
    };
    
    return (
        <> 
            <button className="add_button add_oval"onClick= { _handleAddOval }></button>
        </>
    );
};

export default Ellipse;