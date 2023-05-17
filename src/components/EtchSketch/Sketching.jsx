import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const Sketching = ( props ) => {
    const { canvas } = props;
    const originCoords = [0, 600, 0, 600]; // bottom left corner of canvas, compare with init canvas
    const lineRef = useRef(new fabric.Line(originCoords, {
        stroke: 'black'
    }));

    useEffect(() => {
        if (canvas) {
            const line = new fabric.Line(originCoords, {
                stroke: 'black'
            });
            canvas.add(line);
            canvas.renderAll();
            lineRef.current = line;
        }
    }, [canvas]);

    useEffect( () => {
        const handleKeyDown = (event) => {
            const s = event.shiftKey;
            const e = event.key;

            if ( e === 'ArrowLeft' ) {
                if ( s ) {
                    handleNW();
                } else {
                    handleLeft();
                };
            } else if ( e === 'ArrowUp' ) {
                if ( s ) {
                    handleNE();
                } else {
                    handleUp();
                };
            } else if ( e === 'ArrowRight' ) {
                if ( s ) {
                    handleSE();
                } else {
                    handleRight();
                }
            } else if ( e === 'ArrowDown' ) {
                if ( s ) {
                    handleSW();
                } else {
                    handleDown();
                };
            };
        };

        if ( canvas ) {
            window.addEventListener('keydown', handleKeyDown);
        }

        // clean up
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [canvas]);

    const handleUp = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2, line.y2 - 5], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleRight = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 + 5, line.y2], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleDown = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2, line.y2 + 5], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    }

    const handleLeft = (event) => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 - 5, line.y2], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleNE = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 + 4, line.y2 -4 ], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleSE = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 + 4, line.y2 +4 ], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleSW = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 - 4, line.y2 +4 ], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleNW = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 - 4, line.y2 - 4 ], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    const handleReset = () => {
        canvas.getObjects().forEach((obj) => {
            canvas.remove(obj);
        });
        canvas.discardActiveObject().renderAll();
        lineRef.current = new fabric.Line(originCoords, {
            stroke: 'black'
        });
    };

    console.log(lineRef)

    return (
        <>
            <div className='etch-toolbar'>
                <div className='etch-dial-l'>
                    <button className="etch-btn-top handle-left etch-btn" onClick={handleLeft}>&#9650;</button>
                    <button className="etch-btn-btm handle-right etch-btn" onClick={handleRight}>&#9660;</button>
                </div>
                <div className='etch-dial-r'>
                    <button className="etch-btn-top handle-up etch-btn" onClick={handleUp}>&#9650;</button>
                    <button className="etch-btn-btm handle-down etch-btn" onClick={handleDown}>&#9660;</button>
                </div>
            </div>
        </>
    );
};

{/* <button onClick={handleNE}>NE</button>
<button onClick={handleSE}>SE</button>
<button onClick={handleSW}>SW</button>
<button onClick={handleNW}>NW</button>
<button onClick={handleReset}>Reset</button> */}

export default Sketching;
