import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/home/home.js';
import Sketch from "react-p5";
import './styles.sass';

const settings = {
	about: {
		radius: 40,
		time: -0.1
	},
	contact: {
		radius: 300,
		time: 0.06
	},
	work: {
		radius: 200,
		time: -0.1
	},
	thoughts: {
		radius: 0,
		time: 0
	},
	default: {
		radius: 100,
		time: 0.05
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.time = 0;
		this.radius = 0;
		this.wave = [];
		this.state = {
			activeSection: 'default'
		}
	}
	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove);
		const { innerWidth: w, innerHeight: h } = window;

	}

	handleMouseMove = (evt) => {
		// console.log(evt.clientX);
	}
	setup = (p5, parent) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(parent)
	}

	draw = p5 => {
		let setting = settings[this.state.activeSection];
		p5.background('#2c3e50');
		p5.translate(window.innerWidth/2, window.innerHeight/2);
		p5.stroke('#ecf0f1');
		p5.noFill();
		p5.ellipse(0, 0, this.radius*2);
		let x = this.radius * p5.cos(this.time);
		let y = this.radius * p5.sin(this.time);
		this.wave.push(y);
		p5.fill('#ecf0f1')
		p5.ellipse(x, y, 8);
		p5.translate(-100, 0);
		p5.beginShape();
		p5.noFill();
		for (let i = 0; i < this.wave.length; i++) {
			p5.vertex(i, this.wave[i]);
		}
		p5.endShape();
		if (this.wave.length > 200) {
			this.wave.shift();
		}

		if (this.radius !== setting.radius) {
			if (this.radius > setting.radius) {
				this.radius -= 20;
			} else {
				this.radius += 20;
			}
		}
		this.time += setting.time;
	}


	render() {
		return (
			<main className='main'>
				<div className='circleWrap'>
					<svg className='circle' width="200" height="200">
						<circle className="center" cx="100" cy="100" r="35"></circle>
					</svg>
				</div>
			</main>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


// <svg className='resume' fill='#fff' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
// 	<path d="m445 93-120-90c-2.548-1.911-5.774-3-9-3h-240c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15v-391.894c.019-4.381-2.027-9.126-6-12.106zm-114-48 60 45h-60zm-240 437v-452h210v75c0 8.284 6.716 15 15 15h105v362z"/>
// </svg>
