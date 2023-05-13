import { fabric } from 'fabric'

const Triangle = ( props ) => {

    const { canvas } = props;

    const _handleAddTri = () => {
        const tri = new fabric.Triangle({
            width: 20,
            height: 30,
            fill: 'blue',
            left: 50,
            top: 50
        });
        canvas.add(tri).renderAll()
        }
    
    return (
        <>
            <button className="add_button add_tri" onClick={ _handleAddTri }></button>
        </>
    )
};

export default Triangle;