import React, { useEffect, useState } from "react";
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const CanvasHistory = ( props ) => {
  	const { canvas } = props;

	const _handleUndo = () => {
		if (canvas != null) {
			canvas.undo();
		};
	};

////////// This removes all objects. Doesn't need selection
 	const _handleRedo = () => {
		if (canvas != null) {
        	canvas.redo();
		};
	};

	useEffect(() => {
		window.addEventListener('keyup', e => {
			if (
				e.code == 'KeyZ' &&
				(e.ctrlKey || e.metaKey ) &&
				canvas != null
				) {
				e.preventDefault
				_handleUndo()
			};
		});

		window.addEventListener('keyup', e => {
			if (
				e.code == 'KeyY' &&
				(e.ctrlKey || e.metaKey ) &&
				canvas != null
				) {
				e.preventDefault
				_handleRedo()
			};
		});
	}); 

	return (
		<>
			<Button className="add_button undo_button" onClick={_handleUndo} title="Undo"></Button>
			<Button className="add_button redo_button" onClick={_handleRedo} title="Redo"></Button>
		</>
	)};

export default CanvasHistory;