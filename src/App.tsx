import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	//get random number
	const passedQue = randomNumber(1, 100) > 8;
	//if that numbe is in passed que range
	if (!passedQue) {
		quePageReload(8000);
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

function randomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

function quePageReload(delay: number): void {
	setTimeout(function() {
		location.reload();
	}, delay);
}

export default App;
