import { fabric } from "fabric";

const Rectangle = ( props ) => {

    const { canvas } = props;

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
        height: 140,
        width: 100,
        fill: 'purple'
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    return (
        <>
            <button className="add_button add_rect" onClick={ _handleAddRect }></button>
        </>
    )
};

export default Rectangle;