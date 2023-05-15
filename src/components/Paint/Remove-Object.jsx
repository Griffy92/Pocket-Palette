import React, { useEffect, useState } from "react";

const RemoveObject = ( props ) => {
  const { canvas } = props;

  const _HandleRemoveObject = () =>{
  if (canvas != null){
    // canvas.remove(canvas.getActiveObject()) <-- This only does selected ojects
    canvas.getActiveObjects().forEach((obj) => {
      canvas.remove(obj)
    });
    canvas.discardActiveObject().renderAll()
  }};

////////// This removes all objects. Doesn't need selection
  const _HandleRemoveAllObjects = () => {
    if (canvas != null){
      canvas.getObjects().forEach((obj) => {
        canvas.remove(obj)
      });
      canvas.discardActiveObject().renderAll()
    }};

  return (
    <>
      <button className="add_button delete_button" onClick={_HandleRemoveObject} title="Delete"></button>
      <button className="add_button delete_all_button" onClick={_HandleRemoveAllObjects} title="Reset Canvas"></button>
    </>
  )
};

export default RemoveObject;