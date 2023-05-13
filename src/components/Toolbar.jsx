// import shape components
const Toolbar = () => {
    return (
        <>
            <div>
                <h1>KL toolbar</h1>
                <div className="toolbar">
                    <button className="add_button add_rect" onClick={ _handleAddRect }></button>
                    <button className="add_button add_tri" onClick={ _handleAddTri }></button>
                </div>
                <br></br>
            </div>
        </>
    )
};

export default Toolbar;