import React, { useState, useEffect} from "react";
import { fabric } from "fabric";


const Rectangle = () => {
    const [canvas, setCanvas] = useState('');

   useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 300,
      width: 300,
      backgroundColor: 'white',
      boxShadow: '8px 4px 13px #F4AAB9',
    })
  )

  const addRect = canvi => {
    const rect = new fabric.Rect({
      height: 140,
      width: 100,
      fill: 'purple'
    });
    canvi.add(rect);
    canvi.renderAll();
  }

  const addTri = canvi => {
    const tri = new fabric.Triangle({
        width: 20,
        height: 30,
        fill: 'blue',
        left: 50,
        top: 50
    });
    canvi.add(tri).renderAll()
  }

 

  return (
    <div>
      <h1>KL toolbar</h1>
      <div className="toolbar">
        <button className="add_button add_rect" onClick={() => addRect(canvas)}></button>
        <button className="add_button add_tri" onClick={() => addTri(canvas)}></button>
      </div>
      <br></br>
       <canvas id='canvas'></canvas> 
    </div>
  )
};

export default Rectangle;