import { fabric } from "fabric";
import { useState } from 'react'
import { Popover, Stack, Select, MenuItem, TextField, FormControl, InputLabel, Button, ButtonGroup } from '@mui/material';


const Text = ({ canvas, primaryColour, secondaryColour }) => {

    /////////////////// This handles the dropdown menu things! //////////////////
    const [ anchor, setAnchor] = useState(null);

    const _handleClick = (event) => {
        setAnchor(event.currentTarget);
    };
    const _handleClose = () => {
        setAnchor(null);
    };
    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined; 

    let shadowColour = secondaryColour;
    if (shadowColour == "#ffffff"){
        shadowColour = "#000000";
    };

    //////////////////////////// this is the text function //////////////////////////
    function randomId() {
        return Math.random().toString(36).substring(2, 10);
    };

    function _handleAddText() {
        canvas.isDrawingMode = false;
        const newText = new fabric.IText("Add text", { left: 100, top: 64, fontFamily: "Arial", id: randomId(), fill: primaryColour });
        canvas.add(newText);
        canvas.setActiveObject(newText); // set the new text object as active
    };

    function _handleToggleBold() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                let styles = activeInstance.getSelectionStyles(startIndex, endIndex);
                let fontWeightSet = [...new Set(styles.map(style => style.fontWeight))];
                if (fontWeightSet.includes("bold")) {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'normal'});
                } else {
                    activeInstance.setSelectionStyles({ 'fontWeight': 'bold'});
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
                    activeInstance.setSelectionStyles({ 'fontStyle': 'normal'});
                } else {
                    activeInstance.setSelectionStyles({ 'fontStyle': 'italic'});
                }
            } else {
                if (activeInstance.fontStyle === 'italic') {
                    activeInstance.fontStyle = 'normal';
                } else {
                    activeInstance.fontStyle = 'italic';
                };
            };
        };
        canvas.renderAll(); 
    };

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
                };
            } else {
                if (activeInstance.underline === true) {
                    activeInstance.set('underline', false);
                } else {
                    activeInstance.set('underline', true);
                };
            };
        };
        canvas.renderAll();
    };

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
                };
            };
        };
        canvas.renderAll();
    };
      
    function _handleFontSizeChange(event) {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                activeInstance.setSelectionStyles({ fontSize: event.target.value }, startIndex, endIndex);
            } else {
                activeInstance.fontSize = event.target.value;
            };
        };
        canvas.renderAll();
    };

    function _handleFontFamilyChange(event) {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === "i-text") {
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
                activeInstance.setSelectionStyles({ fontFamily: event.target.value }, startIndex, endIndex);
            } else {
                activeInstance.fontFamily = event.target.value;
            };
        };
        canvas.renderAll();
    };

    function _handleToggleShadow() {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.type === 'i-text') {
            // Create shadow object
            let presetShadow = new fabric.Shadow({
                color: 'rgba(0, 0, 0, 0.5)',
                offsetX: 1,
                offsetY: 2,
                blur: 5,
                color: shadowColour
            });
            if (activeInstance.selectionStart !== activeInstance.selectionEnd) {
                let startIndex = activeInstance.selectionStart;
                let endIndex = activeInstance.selectionEnd;
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
            <ButtonGroup variant="text" style={{display: 'inline'}}>
            <Button className="fontButton add_text paint_common add_button" onClick={ _handleAddText } title="Add Text" style={{ borderColor: "grey" }}></Button>
            <Button className="add_button add_brush_size" onClick= { _handleClick } title="DropDown" sx={{width: 2, p: 1.5}} style={{minWidth: '10px'}}></Button>
                <Popover
                    sx={{ width: 500 }}
                    id={id}
                    open={open}
                    anchorEl={anchor}
                    style={{ maxWidth: 1000}}
                    onClose={_handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left'}}>
                    <Stack sx={{width: 232, p: 2}} spacing={2}>
                        <FormControl  sx={{width: 200}}>
                            <ButtonGroup variant="contained" fullWidth={true} sx={{mb: 2}}>
                                <Button className="fontButton" onClick={ _handleToggleBold } title="Bold" >B</Button>
                                <Button className="fontButton fontItalics" onClick={ _handleToggleItalic } title="Italics">I</Button>
                            </ButtonGroup>
                            <ButtonGroup variant="contained" fullWidth={true} sx={{mb: 2}}>
                                <Button className="fontButton fontUnderline" onClick={_handleToggleUnderline} title="Underline"><span className="underline">U</span></Button>
                                <Button className="fontButton fontLineThrough" onClick={ _handleToggleLineThrough } title="Linethrough"><span className=" linethrough">L</span></Button>
                                <Button className="fontButton shadow" onClick={ _handleToggleShadow } title="Shadow">S</Button>    
                            </ButtonGroup>
                                <TextField type="number" min="30" max="100" onChange={ _handleFontSizeChange } title="Font Size" label="Font Size"/>
                        </FormControl>
                        <FormControl >
                            <InputLabel id="select-helper-label" htmlFor="fontChoice">Font Choice</InputLabel>
                            <Select className="fontButton" onChange={ _handleFontFamilyChange } title="Font Family" id="fontChoice" label="Font-Choice" labelId="select-helper-label">
                                <MenuItem value=""></MenuItem>
                                <MenuItem value="Arial">Arial</MenuItem>
                                <MenuItem value="Impact">Impact</MenuItem>
                                <MenuItem value="Courier New">Courier New</MenuItem>
                                <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                                <MenuItem value="Cursive">Cursive</MenuItem>
                                <MenuItem value="Comic Sans MS">Comic Sans MS</MenuItem>
                            </Select>
                        </FormControl >
                    </Stack>
                </Popover>
            </ButtonGroup>
        </>
    );
    
}

export default Text;