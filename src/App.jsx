import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'

function App() {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
