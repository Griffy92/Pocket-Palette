import { fabric } from "fabric";
import { useEffect, useState } from "react";

function Text(props) {
    let { canvas } = props;
    const [text, setText] = useState("Add text");
    const [version, setVersion] = useState(0);
    const [colour, setColour] = useState("#007ee5");

//   function handleTextChange(event) {
//     setText(event.target.value);
//     canvas.getActiveObject().set("text", event.target.value); // update the text of the active object
//     canvas.renderAll(); // render the canvas to update the changes
//   }

    useEffect(() => {
        if (canvas) {
            canvas.renderAll();
        }
    }, []);

    function addText() {
        let newText = new fabric.IText(text, { left: 100, top: 100 });
        canvas.add(newText);
        canvas.setActiveObject(newText); // set the new text object as active
    }  

    function toggleBold() {
        if (canvas) {
            let activeInstance = canvas.getActiveObject();
            if (activeInstance && activeInstance.type === 'i-text') {
                activeInstance.setSelectionStyles({ 'fontWeight': 'bold' })
                canvas.renderAll();
            }
        }
    }

    return (
        <>
            <button onClick={ addText }>Text box</button>
            <button onClick={ toggleBold() }>B</button>
        </>
    );
}

export default Text;