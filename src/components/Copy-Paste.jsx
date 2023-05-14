import React, { useEffect, useState } from "react";

const CopyPaste = ( props ) => {
  const { canvas } = props;
  let coppiedItems = []

  const _HandleCopy = () =>{  
    if (canvas != null){

      canvas.getActiveObject().clone(function(cloned) {
        coppiedItems = cloned;
      });
    }}

////////// This removes all objects. Doesn't need selection
  const _HandlePaste = () => {
    if (canvas != null){

    coppiedItems.clone(function(clonedObjects) {
      canvas.discardActiveObject();
      clonedObjects.set({
        left: clonedObjects.left + 10,
        top: clonedObjects.top + 10,
        evented: true,
      });

      if (clonedObjects.type === 'activeSelection') {

        clonedObjects.canvas = canvas;
        clonedObjects.forEachObject(function(obj) {
          canvas.add(obj);
        });

        clonedObjects.setCoords();
      } 
      
      else {
        canvas.add(clonedObjects);
      }

      coppiedItems.top += 10;
      coppiedItems.left += 10;
      canvas.setActiveObject(clonedObjects);
      canvas.requestRenderAll();
    });
  }};

  return (
    <>
      <button className="add_button copy_button" onClick={_HandleCopy} title="Copy"></button>
      <button className="add_button paste_button" onClick={_HandlePaste} title="Paste"></button>
    </>
  )};

export default CopyPaste;