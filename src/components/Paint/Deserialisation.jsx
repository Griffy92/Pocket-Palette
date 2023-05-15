const Deserialisation = ( props ) => {
    const { canvas } = props;

    const _handleLoad = () => {
        canvas.loadFromJSON( jsonCanvas );
    }

    return (
        <button onClick={ _handleLoad }>Load</button>
    )
};