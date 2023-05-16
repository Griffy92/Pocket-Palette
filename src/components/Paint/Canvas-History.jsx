import React, { useEffect, useState } from "react";
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

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

  useEffect(() => {
    window.addEventListener('keyup', e => {
      if (
          e.code == 'KeyZ' &&
          e.ctrlKey  &&
          canvas != null
        ) {
        e.preventDefault
        _HandleUndo()
      };
    });

    window.addEventListener('keyup', e => {
      if (
          e.code == 'KeyY' &&
          e.ctrlKey &&
          canvas != null
        ) {
        e.preventDefault
        _HandleRedo()
        };
    });
  }); 

  return (
    <>
    <Button className="add_button undo_button" onClick={_HandleUndo} title="Undo"></Button>
    <Button className="add_button redo_button" onClick={_HandleRedo} title="Redo"></Button>
    </>
  )};

export default CanvasHistory;