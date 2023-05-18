import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const SVGExport = ( props ) => {

    const { canvas } = props;

    const _handleExportSVG = () => {

        const tempLink = document.createElement('a');
        const dataSVG = canvas.toSVG();
        
        const blob = new Blob([dataSVG], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
    
        tempLink.setAttribute('href', url);
        tempLink.setAttribute('download', 'canvas.svg');
        tempLink.click();
        
        URL.revokeObjectURL(url); // clean up URL
        tempLink.remove(); // remove the created a tag
    };

    return (
        <Button onClick={ _handleExportSVG }>SVG</Button>
    );
};

export default SVGExport;