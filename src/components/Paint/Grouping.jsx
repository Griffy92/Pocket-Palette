import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Grouping = ( props ) => {
    const { canvas } = props;

    const _handleGrouping = () => {
        canvas.getActiveObject().toGroup();
        canvas.renderAll();
    };

    const _handleUngrouping = () => {
        canvas.getActiveObject().toActiveSelection();
        canvas.renderAll();
    };
    
    return (
        <>
            <Button className='add_button group_button' onClick={ _handleGrouping } title="Group Objects" style={{ borderColor: "grey" }}></Button>
            <Button className='add_button ungroup_button' onClick={ _handleUngrouping } title="Ungroup Objects" style={{ borderColor: "grey" }}></Button>
        </>
    );
};

export default Grouping;