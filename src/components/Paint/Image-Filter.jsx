import React, { useState } from "react";
import { fabric } from "fabric";
import { Popover, Stack, Input, Select, MenuItem, TextField, FormControl, InputLabel, Button, ButtonGroup } from '@mui/material';

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
                case "saturation":
                    filter = new fabric.Image.filters.Saturation({
                        saturation: 1.3
                    });
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
    // id="imageFilter" label="image-filter-label" labelId="image-filter-label" 
    return (
        <>  
            <FormControl sx={{width: 130}} variant="standard" style={{opacity: .5}}>
                <Select value={ selectedFilter } className="fontButton" onChange={ _handleFilterChange } title="Image_Filter" defaultValue={""} displayEmpty={true} >
                    <MenuItem disabled value="">Image Filter</MenuItem>
                    <MenuItem value="remove-filter">Remove Filter</MenuItem>
                    <MenuItem value="brownie">Brownie</MenuItem>
                    <MenuItem value="vintage">Vintage</MenuItem>
                    <MenuItem value="polaroid">Polaroid</MenuItem>
                    <MenuItem value="technicolor">Technicolor</MenuItem>
                    <MenuItem value="blur">Blur</MenuItem>
                    <MenuItem value="kodachrome">Kodachrome</MenuItem>
                    <MenuItem value="invert">Invert</MenuItem>
                    <MenuItem value="saturation">Saturation</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default ImageFilter;