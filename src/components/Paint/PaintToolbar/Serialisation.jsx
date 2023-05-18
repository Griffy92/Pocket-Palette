import { Button } from '@mui/material';

const Serialisation = ( props ) => {
    const { canvas } = props;
    
    let jsonCanvas; // store canvas string to put into DB

    const _handleSave = () => {
        jsonCanvas = JSON.stringify(canvas); // convert canvas into string
        console.log(jsonCanvas); 
    };

    // DB code here

    return (
        <>
            <Button className="add_button paint_common save_button" onClick={ _handleSave } title='Save'></Button>
        </>
    )
};

export default Serialisation;

