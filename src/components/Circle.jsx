import { fabric } from 'fabric'

const Circle = ( props ) => {

    const { canvas } = props; // destructuring props
    
    const _handleAddCircle = () => {
        const circle = new fabric.Circle({
            radius: 50,
            fill: 'red'
        });

        // console.log(circle); // circle needs radius defined

        canvas.add(circle);
        canvas.renderAll();
    };

    return (
        <>
            <button onClick={ _handleAddCircle }>Circle</button>
        </>
    )
};

export default Circle;
