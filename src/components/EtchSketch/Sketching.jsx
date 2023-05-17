const Sketching = ( props ) => {
    // use 4 buttons to control drawing lines i.e.
    const { canvas } = props;

    if ( canvas !== null ) {
        // Line array starting x,y ending x,y
        const line = new fabric.Line([200,50,200,200],{
            left: 170,
            top: 150,
            stroke: 'black'
        });
        canvas.add(line)
        canvas.renderAll();
    };

    const _handleKeyDown = () => {
        return
    };

};

export default Sketching;

  // if ( canvas !== null ) {
    //     const path = new fabric.Path('M 0 0 L 550 0')
    //     canvas.add(path)
    //     canvas.renderAll();
    // }