import React, { useRef } from "react";
import { fabric } from "fabric";

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
            };
            img.src = event.target.result;  
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <input type="file" accept="image/*" ref={fileInput} style={{ display: "none" }} onChange={ _handleFileChange }/>
            <button onClick={() => fileInput.current.click()}>Upload Image</button>
        </>
    );
};

export default ImageUpload;