import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const Deserialisation = ( props ) => {
    const { canvas } = props;

    // hardcoded a canvas with a red dot top left corner to test load
    const testCanvas = {"version":"5.3.0","objects":[{"type":"circle","version":"5.3.0","originX":"left","originY":"top","left":0,"top":0,"width":100,"height":100,"fill":"red","stroke":"","strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","skewX":0,"skewY":0,"radius":50,"startAngle":0,"endAngle":360}],"background":"white"};

    const _handleLoad = () => {
        canvas.loadFromJSON( testCanvas );
        canvas.renderAll();
    };

    return (
        <Button className="add_button load_button" onClick={ _handleLoad } title='Load'></Button>
    );
};

export default Deserialisation;