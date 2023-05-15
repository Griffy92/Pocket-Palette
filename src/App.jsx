import React from 'react';
import Canvas from './components/Paint/Canvas'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PixelCanvas from './components/PixelArt/PixelCanvas'



function App() {
	return (
		<>
			<BrowserRouter>
				<nav>
					<a href="/canvas">Paint  | </a>
					<a href="/pixelcanvas">Pixel </a>
				</nav>

			
				<Routes>
					<Route path="/canvas" element={ <Canvas/> }></Route>
					<Route path="/pixelcanvas" element={ <PixelCanvas/> }></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App
