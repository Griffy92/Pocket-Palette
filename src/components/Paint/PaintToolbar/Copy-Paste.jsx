import React, { useEffect, useState } from "react";
import { Popover, Stack, ButtonGroup, Button, Slider } from '@mui/material';

const CopyPaste = ( props ) => {
	const { canvas } = props;
	let coppiedItems = [];

	const _HandleCopy = (ActObj) => {  
		if (canvas != null) {
			console.log(ActObj);
			ActObj.clone( function(cloned) {
				coppiedItems = cloned;
			});
		};
	};

	const _HandleCut = (ActObj) => {  
		if (canvas != null) {
			console.log(ActObj);
			ActObj.clone( function(cloned) {
				coppiedItems = cloned;
			});
			canvas.remove(canvas.getActiveObject())
			};
	};		
	
////////// This removes all objects. Doesn't need selection
	const _HandlePaste = () => {
		if (canvas != null) {
			coppiedItems.clone(function(clonedObjects) {

				canvas.discardActiveObject();
				clonedObjects.set( {
					left: clonedObjects.left + 10,
					top: clonedObjects.top + 10,
					evented: true,
				});

				if (clonedObjects.type === 'activeSelection') {
					clonedObjects.canvas = canvas;
					clonedObjects.forEachObject(function(obj) {
						canvas.add(obj);
					0});
					clonedObjects.setCoords();

				} else {
					canvas.add(clonedObjects);
				};

				coppiedItems.top += 10;
				coppiedItems.left += 10;
				canvas.setActiveObject(clonedObjects);
				canvas.requestRenderAll();
			});
		};
	};

	useEffect(() => {
		window.addEventListener('keyup', e => {
			if (
				e.code == 'KeyC' &&
				( e.ctrlKey || e.metaKey ) &&
				canvas != null &&
				canvas.getActiveObject() != null
			) {
				e.preventDefault()
				_HandleCopy(canvas.getActiveObject());
			};
		});

		window.addEventListener('keyup', e => {
			if (
				e.code == 'KeyX' &&
				( e.ctrlKey || e.metaKey ) &&
				canvas != null &&
				canvas.getActiveObject() != null
			) {
				e.preventDefault()
				_HandleCut(canvas.getActiveObject());
			};
		});

		window.addEventListener('keydown', e => {
			if (
				e.code == 'KeyV' &&
				(e.ctrlKey || e.metaKey ) &&
				canvas != null
			) {
				e.preventDefault()
				_HandlePaste();
			};
		});
	}); 


	return (
		<>
			{/* <Button className="add_button copy_button" onClick={_HandleCopy} title="Copy"></Button> */}
			{/* <Button className="add_button paste_button" onClick={_HandlePaste} title="Paste"></Button> */}
		</>
	);
};

export default CopyPaste;