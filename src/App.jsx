import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Success from './components/Success'
import Canvas from './components/Paint/Canvas'

function App() {
	return (
		<div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Login/> } />
				<Route path="/success" element={ <Success /> } />
				
			</Routes>

		</BrowserRouter>
		
		</div>
	)
}
export default App
