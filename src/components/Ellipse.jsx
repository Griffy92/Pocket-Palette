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
    
    // reminder to add button class to ellipses
    return (
        <> 
            <button onClick= { _handleAddOval }>Oval</button>
        </>
    );
};

export default Ellipse;