import React, { useState, useEffect} from "react";
import { fabric } from "fabric";


const Rectangle = ( props ) => {
    const { canvas } = props;

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
        height: 140,
        width: 100,
        fill: 'purple'
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    const _handleAddTri = () => {
    const tri = new fabric.Triangle({
        width: 20,
        height: 30,
        fill: 'blue',
        left: 50,
        top: 50
    });
    canvas.add(tri).renderAll()
    }

    return (
    <div>
        <h1>KL toolbar</h1>
        <div className="toolbar">
        <button className="add_button add_rect" onClick={ _handleAddRect }></button>
        <button className="add_button add_tri" onClick={ _handleAddTri }></button>
        </div>
            <br></br>
        </div>
    )
};

export default Rectangle;