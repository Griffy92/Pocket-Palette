import { fabric } from "fabric";

const Text = ( {canvas} ) => {
    function randomId() {
        return Math.random().toString(36).substring(2, 10);
    }

    function _handleAddText() {
        const newText = new fabric.IText("Add text", { left: 100, top: 64, fontFamily: "Arial", id: randomId()});
        canvas.add(newText);
        canvas.setActiveObject(newText); // set the new text object as active
    }  

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

    function _handleToggleUnderline() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let underlineSet = [...new Set(styles.map(style => style.underline))];
                if (underlineSet.includes(true)) {
                activeInstance.setSelectionStyles({ 'underline': false });
                } else {
                activeInstance.setSelectionStyles({ 'underline': true });
                }
            } else {
                if (activeInstance.underline === true) {
                activeInstance.set('underline', false);
                } else {
                activeInstance.set('underline', true);
                }
            } 
        }
        canvas.renderAll();
    }

    function _handleToggleLineThrough() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let linethroughSet = [...new Set(styles.map(style => style.linethrough))];
                if (linethroughSet.includes(true)) {
                activeInstance.setSelectionStyles({ 'linethrough': false });
                } else {
                activeInstance.setSelectionStyles({ 'linethrough': true });
                }
            } else {
                if (activeInstance.linethrough === true) {
                activeInstance.set('linethrough', false);
                } else {
                activeInstance.set('linethrough', true);
                }
            } 
        }
        canvas.renderAll();
    }
      
    function _handleFontSizeChange(event) {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                activeInstance.setSelectionStyles({ fontSize: event.target.value }, startIndex, endIndex);
            } else {
                activeInstance.fontSize = event.target.value;
            }
        }
        canvas.renderAll();
    }

    function _handleFontFamilyChange(event) {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === "i-text") {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                activeInstance.setSelectionStyles({ fontFamily: event.target.value }, startIndex, endIndex);
            } else {
                activeInstance.fontFamily = event.target.value;
            }
        }
        canvas.renderAll();
    }

    function _handleToggleShadow() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            // Create shadow object
            let presetShadow = new fabric.Shadow({
                color: 'rgba(0, 0, 0, 0.5)',
                offsetX: 1,
                offsetY: 2,
                blur: 5
            });
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                activeInstance.setSelectionStyles({ shadow: presetShadow });
            } else {
                let shadow = activeInstance.shadow;
                if (shadow) {
                    activeInstance.set('shadow', null);
                } else {
                    activeInstance.set('shadow', presetShadow );
                }
            }
        }
        canvas.renderAll();
    }

    return (
        <>
            <button className="fontButton" onClick={ _handleAddText } title="Add Text">T</button>
            <button className="fontButton" onClick={ _handleToggleBold } title="Bold">B</button>
            <button className="fontButton fontItalics" onClick={ _handleToggleItalic } title="Italics">I</button>
            <button className="fontButton fontUnderline" onClick={_handleToggleUnderline} title="Underline"><span className="underline">U</span></button>
            <button className="fontButton fontLineThrough" onClick={ _handleToggleLineThrough } title="Line-through"><span className="linethrough">L</span></button>
            <button className="fontButton shadow" onClick={ _handleToggleShadow } title="Shadow">S</button>      
            <input type="number" min="30" max="100" onChange={ _handleFontSizeChange } title="Font Size"/>
            <select className="fontButton" onChange={ _handleFontFamilyChange } title="Font Family">
            <option value="Arial">Arial</option>
            <option value="Impact">Impact</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Cursive">Cursive</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
        </>
    );
    
}

export default Text;