import React from 'react'
import Search from './components/Search.jsx'

const App = () => {
	const [searchTerm, setSearchTerm] = React.useState('');
	return (
		<main>
			<div className="pattern" />
			<div className="wrapper">
				<header>
					<img src='./hero.png' alt='hero' />
					<h1>Find <span className='text-gradient'>Movies</span>You'll enjoy without the hassle.</h1>
				</header>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
		</main>
	)
}

export default App
