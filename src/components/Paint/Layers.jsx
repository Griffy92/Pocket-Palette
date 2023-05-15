import React, { useEffect, useState } from "react";

const Layers = ( props ) => {
  const { canvas } = props;

  const _HandleBringForward = () =>{
    if (canvas != null){
        canvas.getActiveObjects().forEach((obj) => {
            canvas.bringForward(obj)
        });
        canvas.renderAll()
      }};

  const _HandleSendBackward = () => {
    if (canvas != null){
        canvas.getActiveObjects().forEach((obj) => {
            canvas.sendBackwards(obj)
        });
        canvas.renderAll()
      }};

  return (
    <>
    <button className="add_button forward_button" onClick={_HandleBringForward} title="Forward"></button>
    <button className="add_button backward_button" onClick={_HandleSendBackward} title="Backwards"></button>
    </>
  )};

export default Layers;