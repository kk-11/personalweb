import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Error from './components/error/error.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.sass';

function fireGA() {
	console.log('here', window.gtag);
	window.gtag('event', 'xyz');
}
export default function App () {
	return (
		<main>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} />
				<Route component={Error} />
			</Switch>
		</main>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('app')
);
