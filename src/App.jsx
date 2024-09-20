import "./App.scss"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ValueContext } from './pages/home/index'
import { useState, useEffect } from 'react'

function App() {

	const [showValue, setShowValue] = useState('false')
	const [yPos, setYPos] = useState(0)
	
	const [assortment, setAssortment] = useState({
		transition: 'all 600ms ease-in',
		opacity: '0',
	})

	const [styleTop, setStyleTop] = useState({
		transition: 'all 300ms ease-in',
		transform: 'translate(0, 100%)',
		opacity: '0'
	})

	const windowInnerHeight = window.innerHeight
	useScrollPosition(
		({ currPos }) => {

			if (Math.round((-(currPos.y+(-windowInnerHeight))) > Math.round(yPos)) && (showValue === 'false')) {
				
				setShowValue('true')
				setAssortment({
					transition: 'all 600ms ease-in',
					opacity: '1',
				})
			}
		},
		[showValue]
	)
	
	useEffect(() => {
		setStyleTop({
			transition: `all 300ms ease-in'`,
			transform: 'translate(0, 0)',
			opacity: '1',
		})
	}, [])

    
    return (
        <ValueContext.Provider value={{ yPos, setYPos }}>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home style={{ ...assortment }} styleTop={{ ...styleTop }}/>} />
                </Routes>
            </div>
        </ValueContext.Provider>
    )
}

export default App
