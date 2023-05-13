import { fabric } from 'fabric'

const Ellipse = ( props ) => {

    const { canvas } = props;

    const _handleAddOval = () => {
        const oval = new fabric.Ellipse({
            ry: 50,
            rx: 75,
            fill: 'yellow',
        });

        // console.log(oval) // needs ry & rx defined
        canvas.add(oval);
        canvas.renderAll();
    };
    
    return (
        <> 
            <button className="add_button add_oval"onClick= { _handleAddOval }></button>
        </>
    );
};

export default Ellipse;