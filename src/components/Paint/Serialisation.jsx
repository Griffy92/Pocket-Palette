const Serialisation = ( props ) => {
    const { canvas } = props;
    
    let jsonCanvas;

    const _handleSave = () => {
        jsonCanvas = JSON.stringify(canvas); // convert canvas into string
        // console.log(jsonCanvas);
        console.log('hello', canvas.toSVG());
    }

    return (
        <>
            <button onClick={ _handleSave }>Save</button>
            <button onClick={ _saveSVG }>Save SVG</button>
        </>
    )
};

export default Serialisation;

