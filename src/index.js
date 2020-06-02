import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/home.js';
import Sketch from "react-p5";
import './styles.sass';

function fireGA() {
	console.log('here', window.gtag);
	window.gtag('event', 'xyz');
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.x = 50
		this.y = 50
	}

	setup = (p5, parent) => {
		p5.createCanvas(500, 500).parent(parent)
	}
	draw = p5 => {
		p5.background(0)
		p5.line(30, 200, 285, 20);
		p5.stroke(126);
		p5.strokeWeight(4);
		p5.ellipse(this.x, this.y, 70, 70)
		this.x++
	}
	render() {
		return (
			<main>
				<Sketch setup={this.setup} draw={this.draw} />
				About
				Projects
				Contact
			</main>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
