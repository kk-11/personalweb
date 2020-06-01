import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/home.js';
import './styles.sass';

function fireGA() {
	console.log('here', window.gtag);
	window.gtag('event', 'xyz');
}
export default function App () {
	return (
		<main>
			works?
		</main>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
