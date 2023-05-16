const Grouping = ( props ) => {
    const { canvas } = props;

    const _handleGrouping = () => {
        canvas.getActiveObject().toGroup()
        canvas.renderAll();
    };

    const _handleUngrouping = () => {
        canvas.getActiveObject().toActiveSelection();
        canvas.renderAll();
    };
    
    return (
        <>
            <button onClick={ _handleGrouping } title="Group Objects">Group</button>
            <button onClick={ _handleUngrouping } title="Ungroup Objects">Ungroup</button>
        </>
    )
};

export default Grouping;