import React from "react";
import { Button } from '@mui/material';

const Layers = ( props ) => {
	const { canvas } = props;

	const _HandleBringForward = () =>{
		if (canvas != null) {
			canvas.getActiveObjects().forEach((obj) => {
				canvas.bringForward(obj);
			});
			canvas.renderAll();
		};
	};

	const _HandleSendBackward = () => {
		if (canvas != null) {
			canvas.getActiveObjects().forEach((obj) => {
				canvas.sendBackwards(obj);
			});
			canvas.renderAll();
		};
	};

	return (
		<>
			<Button className="add_button paint_common forward_button" onClick={_HandleBringForward} title="Send Forward" style={{ borderColor: "grey" }}></Button>
			<Button className="add_button paint_common backward_button" onClick={_HandleSendBackward} title="Send Backward" style={{ borderColor: "grey" }}></Button>
		</>
	);
};

export default Layers;