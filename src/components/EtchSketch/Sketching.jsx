import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Sketching = ( props ) => {
    const { canvas } = props;
    const lineRef = useRef(new fabric.Line([0, 300, 0, 300], {
        stroke: 'black'
    }));

    useEffect(() => {
        if (canvas) {
            const line = new fabric.Line([0, 300, 0, 300], {
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
        lineRef.current = new fabric.Line([0, 300, 0, 300], {
            stroke: 'black'
        });
    };

    console.log(lineRef)

    return (
        <>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
            <button onClick={handleNE}>NE</button>
            <button onClick={handleSE}>SE</button>
            <button onClick={handleSW}>SW</button>
            <button onClick={handleNW}>NW</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default Sketching;
