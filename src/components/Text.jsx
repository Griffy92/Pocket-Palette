import { fabric } from "fabric";

const Text = ( props ) => {
    const { canvas } = props;

    function randomId() {
        return Math.random().toString(36).substring(2, 10);
    }

    function _handleAddText() {
        const newText = new fabric.IText("Add text", { left: 100, top: 64, id: randomId()});
        canvas.add(newText);
        canvas.setActiveObject(newText); // set the new text object as active
    }  

    return (
        <>
            <button className="fontButton" onClick={ _handleAddText }>T</button>
        </>
    );
}

export default Text;