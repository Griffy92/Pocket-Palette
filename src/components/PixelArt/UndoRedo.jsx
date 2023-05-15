// NEEDS TO BE UPDATED TO USE PROPS FROM BOARD

import React, { useRef } from "react";

import { Dotting, useDotting } from "dotting";

const UndoRedo = () => {
  const ref = useRef(null);
  const { undo, redo } = useDotting(ref);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Dotting ref={ref} width={"100%"} height={300} />
      <div
        style={{
          marginTop: 10,
          marginBottom: 50,
          display: "flex",
        }}
      >
        <button
          style={{
            padding: "5px 10px",
            background: "none",
          }}
          onClick={undo}
        >
          undo
        </button>
        <button
          style={{
            padding: "5px 10px",
            background: "none",
          }}
          onClick={redo}
        >
          redo
        </button>
      </div>
    </div>
  );
};

export default UndoRedo;