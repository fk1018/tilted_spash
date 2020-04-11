import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	//get random number
	const passedQue = randomNumber(1, 100) < 15;
	//if that numbe is in passed que range
	if (!passedQue) {
		quePageReload(8000);
	}
	return (
		<div className="App">
			<header className="App-header">
				<title>{passedQue ? 'Yeezy Que passed' : 'Still in Que'}</title>
				{passedQue ? (
					<a data-auto-id="yeezy-navigation-link-help-home" href="/">
						Home
					</a>
				) : (
					<h1>STILL IN QUE</h1>
				)}
			</header>
		</div>
	);
}

function randomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

function quePageReload(delay: number): void {
	setTimeout(function() {
		window.location.reload();
	}, delay);
}

export default App;
