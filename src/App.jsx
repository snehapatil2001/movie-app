import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * A function component that returns a styled div with the title as children.
 * @param {Object} props - React props object.
 * @param {string} props.title - Title to be displayed in the card.
 * @returns {JSX.Element} A styled div with the title as children.
 */
const Card = ( { title } ) => {
	return (
		<p style={
			{
				color: 'red',
				fontSize: '2rem',
				fontWeight: 'bold'
			}
		}>{ title }</p>
	)
}

const App = () => {
	return (
		<div className="App">
			Hello
			<Card title="sneha" rating={5} />
			<Card title="gita" />
		</div>
	)
}

export default App
