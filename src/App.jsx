import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Success from './components/Success'
import Canvas from './components/Paint/Canvas'
import PixelCanvas from './components/PixelArt/PixelCanvas'
import Works from './components/Works';
import EtchCanvas from './components/EtchSketch/EtchCanvas';


function App() {
	return (
		<>

			<BrowserRouter>
				<nav>
					<a href="/canvas">Paint  | </a>
					<a href="/pixelcanvas">Pixel </a>
					<a href="/works">My Works</a>
					<a href="/etch">Etch</a>
				</nav>

			
				<Routes>
					<Route path="/" element={ <Login/> } />
					<Route path="/success" element={ <Success /> } />
					<Route path="/canvas" element={ <Canvas/> }></Route>
					<Route path="/pixelcanvas" element={ <PixelCanvas/> }></Route>
					<Route path="/works" element={ <Works/> }></Route>
					<Route path="/etch" element={ <EtchCanvas/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App
