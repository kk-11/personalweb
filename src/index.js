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
		const navItems = [ 'about', 'contact', 'work', 'thoughts' ];
		return (
			<main className='main'>
				<Sketch className='canvas' setup={this.setup} draw={this.draw} />
				<nav className='nav'>
					{navItems.map(item => {
						return(
							<span onClick={() => this.setState({activeSection: item})} className='navItem' key={item}>{item}</span>)}
						)
					}
				</nav>
			</main>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
