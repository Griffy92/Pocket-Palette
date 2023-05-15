import React, { useEffect, useState } from "react";

const CanvasHistory = ( props ) => {
  const { canvas } = props;

  const _HandleUndo = () =>{
    if (canvas != null){
      canvas.undo();
    }};

////////// This removes all objects. Doesn't need selection
  const _HandleRedo = () => {
    if (canvas != null){
        canvas.redo();
      }};

  return (
    <>
    <button className="add_button undo_button" onClick={_HandleUndo} title="Undo"></button>
    <button className="add_button redo_button" onClick={_HandleRedo} title="Redo"></button>
    </>
  )};

export default CanvasHistory;