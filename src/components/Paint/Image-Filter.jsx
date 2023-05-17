import React, { useState } from "react";
import { fabric } from "fabric";


const ImageFilter = ({ canvas }) => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const applyFilter = (filterName) => {
        let activeInstance = canvas.getActiveObject();
        if (activeInstance && activeInstance.isType("image")) {
            let filter = "";
            switch (filterName) {
                case "grayscale":
                    filter = new fabric.Image.filters.Grayscale();
                    break;
                case "brownie":
                    filter = new fabric.Image.filters.Brownie();
                    break;
                case "vintage":
                    filter = new fabric.Image.filters.Vintage();
                    break;
                case "polaroid":
                    filter = new fabric.Image.filters.Polaroid();
                    break;
                case "technicolor":
                    filter = new fabric.Image.filters.Technicolor();
                    break;
                case "blur":
                    filter = new fabric.Image.filters.Blur({
                        blur: 0.15
                    });
                    break;
                case "kodachrome":
                    filter = new fabric.Image.filters.Kodachrome();
                    break;
                case "invert":
                    filter = new fabric.Image.filters.Invert();
                    break;
                case "remove-filter":
                    activeInstance.filters = [];
                    activeInstance.applyFilters();
                    canvas.renderAll();
                    return;
            }
            activeInstance.filters = filter ? [filter] : [];
            activeInstance.applyFilters();
            canvas.renderAll();
        };
    };

    const _handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        applyFilter(selectedValue);
    };

    return (
        <>
            <select value={ selectedFilter } onChange={ _handleFilterChange }>
                <option value="remove-filter">Select Image Filter</option>
                <option value="brownie">Brownie</option>
                <option value="vintage">Vintage</option>
                <option value="polaroid">Polaroid</option>
                <option value="technicolor">Technicolor</option>
                <option value="blur">Blur</option>
                <option value="kodachrome">Kodachrome</option>
                <option value="invert">Invert</option>
            </select>
        </>
    );
};

export default ImageFilter;