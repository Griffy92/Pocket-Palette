import React, { useRef } from "react";
import { fabric } from "fabric";
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const ImageUpload = ({ canvas }) => {
    const fileInput = useRef(null);

    const _handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const fabricImg = new fabric.Image(img);
                canvas.add(fabricImg);
                canvas.setActiveObject(fabricImg);
            };
            img.src = event.target.result;  
        };
        reader.readAsDataURL(file);
    };
      
    return (
        <>
            <input type="file" accept="image/*" ref={fileInput} style={{ display: "none" }} onChange={ _handleFileChange }/>
            <Button className="add_button upload_button" onClick={() => fileInput.current.click()} title='Upload'></Button>
        </>
    );
};

export default ImageUpload;