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
            <button className="fontButton" onClick={ _handleAddText } title="Add Text">T</button>
            <button className="fontButton" onClick={ _handleToggleBold } title="Bold">B</button>
            <button className="fontButton fontItalics" onClick={ _handleToggleItalic } title="Italics">I</button>
        </>
    );

    function _handleToggleBold() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let fontWeightSet = [...new Set(styles.map(style => style.fontWeight))];
                if (fontWeightSet.includes("bold")) {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'normal'})
                } else {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'bold'})
                }
            } else {
                if (activeInstance.fontWeight === 'bold') {
                    activeInstance.fontWeight = 'normal';
                } else {
                    activeInstance.fontWeight = 'bold';
                }
            }
        }
        canvas.renderAll();
    }



    function _handleToggleItalic() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let fontStyleSet = [...new Set(styles.map(style => style.fontStyle))];
                if (fontStyleSet.includes("italic")) {
                    activeInstance.setSelectionStyles({ 'fontStyle': 'normal'})
                } else {
                    activeInstance.setSelectionStyles({ 'fontStyle': 'italic'})
                }
            } else {
                if (activeInstance.fontStyle === 'italic') {
                    activeInstance.fontStyle = 'normal';
                } else {
                    activeInstance.fontStyle = 'italic';
                }
            }
        }
        canvas.renderAll(); 
    }
    
}

export default Text;