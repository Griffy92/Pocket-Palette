const Serialisation = ( props ) => {
    const { canvas } = props;
    
    let jsonCanvas; // store canvas string to put into DB

    const _handleSave = () => {
        jsonCanvas = JSON.stringify(canvas); // convert canvas into string
        console.log(jsonCanvas); 
    }

    // DB code here

    return (
        <>
            <button onClick={ _handleSave }>Save</button>
        </>
    )
};

export default Serialisation;

