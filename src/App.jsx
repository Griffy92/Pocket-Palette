import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTS 
import Login from './components/Login'
import Success from './components/Success'
import Canvas from './components/Paint/Canvas'
import PixelCanvas from './components/PixelArt/PixelCanvas'
import Works from './components/Works';



function App() {
	
	return (
		<>
			
			<BrowserRouter>
				<nav>
					<a href="/canvas">Paint  | </a>
					<a href="/pixelcanvas">Pixel </a>
					<a href="/works">My Works</a>
				</nav>

			
				<Routes>
					
					{/* Login / sign up page */}
					<Route path="/" element={ <Login /> } />
					<Route path="/success" element={ <Success /> } />

					{/* Paint and Pixel Board */}
					<Route path="/canvas" element={ <Canvas /> }></Route>
					<Route path="/pixelcanvas" element={ <PixelCanvas /> }></Route>

					{/* Works */}
					<Route path="/works" element={ <Works /> }></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App

// 	{ Object.keys(user).length !== 0 }