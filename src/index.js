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
		this.x = 0;
		this.y = 0;
		this.handleMouseMove = this.handleMouseMove.bind(this);
	}
	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove);
	}

	handleMouseMove(evt) {
		console.log(evt);
		this.x = evt.clientX;
		this.y = evt.clientY;
	}

	setup = (p5, parent) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(parent)
	}
	draw = p5 => {
		p5.background(0)
		p5.line(this.x, this.y, 0, 0);
		p5.stroke(126);
		p5.strokeWeight(4);
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
