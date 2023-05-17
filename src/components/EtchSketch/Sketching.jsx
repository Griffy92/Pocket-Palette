import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Sketching = ({ canvas }) => {
    const lineRef = useRef(null);

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

    const handleLeft = () => {
        const line = lineRef.current;
        const newLine = new fabric.Line([line.x2, line.y2, line.x2 - 5, line.y2], {
            stroke: 'black'
        });
        canvas.add(newLine);
        canvas.renderAll();
        lineRef.current = newLine;
    };

    console.log(lineRef)

    return (
        <>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>
        </>
    );
};

export default Sketching;
