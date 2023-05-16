import { Button } from '@mui/material';

const CanvasDownload = ( props ) => {
    const { canvas } = props;

    const fileFormat = ['png', 'jpeg']; // hard coding some file formats becuz lazy

    const _handleCanvasDownload = (format) => {
        const tempLink = document.createElement('a'); // create a a tag
        const imgLink = canvas.toDataURL({
            format: format,
        });
        tempLink.setAttribute('href', imgLink);
        tempLink.setAttribute('download', `canvas.${format}`);
        tempLink.click();
        tempLink.remove(); // remove the created a tag
    }

    return (
        fileFormat.map( ( format, index )=> {
            return <Button key={ index } onClick={ () => _handleCanvasDownload( format) }> {format} </Button>
        })
    );
};

export default CanvasDownload;