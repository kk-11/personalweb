import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/home/home.js';
import { debounce } from './utils';
// import Sketch from "react-p5";
import rock from '../assets/rock.jpg'
import leaf from '../assets/leaf.jpg'


import './styles.sass';
const Context = React.createContext();
console.log(Context);
const words = [ 'Welcome', 'words', 'Memes', 'super', 'xytakjflkajf', 'finalForTesting' ];

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
		this.handleMouseMove = debounce(this.handleMouseMove.bind(this), 300);
		this.state = {
			activeSection: 'default',
			overed: false,
			menuOpen: false,
			activeIdx: 0,
			transformX: 0,
			transformY: 0
		}
	}
	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove);
		const { innerWidth: w, innerHeight: h } = window;
		this.height = h;
		this.width = w;
	}

	handleMouseMove(evt) {
		const clampedX = evt.clientX / this.width;
		const clampedY = evt.clientY / this.height;
		// this.setState({
		// 	transformX: clampedX.toFixed(2),
		// 	transformY: clampedY.toFixed(2)
		// });
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

	handleMouseDown = () => this.setState({ overed: true });
	handleMouseUp = () => this.setState({ overed: false });
	handleTransition = (evt) => {
		if (this.state.overed && evt.propertyName === 'transform') {
			this.setState({
				menuOpen: !this.state.menuOpen
			});
		}
	}

	handleClose = () => {
		// console.log('handleClose');
	}
	increment = () => {
		let newIdx = this.state.activeIdx + 1;
		if (newIdx >= words.length) newIdx = 0;
		this.setState({
			activeIdx: newIdx
		});
	}
	getWordClass = (i, activeIdx) => {
		const length = words.length;
		const active = i === activeIdx;
		let left = i === activeIdx - 1;
		if (activeIdx === 0) {
			left = i === length - 1;
		}
		let right = i === activeIdx + 1;
		if (activeIdx === length - 1) {
			right = i === 0;
		}

		const inactive = !active && !left && !right;
		const styleClass = active && 'active' || left && 'left' || right && 'right' || inactive && 'inactive';
		return styleClass;
	}

	render() {
		const {
			overed,
			menuOpen,
			activeIdx,
			transformX,
			transformY
		} = this.state;

		return (
			<main className='main'>
				<div className={`menu ${menuOpen && 'open'}`} />
				<div className={`headerToggle ${(overed) && 'over'}`} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onClick={this.handleClose}>
					<div className={`x ${menuOpen && 'menuOpen'}`} />
					<div className='cta'>{menuOpen ? 'Close' : 'Hold'}</div>
					<div className='circleWrap'>
						<svg className='circle' width="200" height="200">
							<circle className="center" cx="100" cy="100" r="35" onTransitionEnd={this.handleTransition}></circle>
						</svg>
					</div>
				</div>
				<article className='wordGallery' style={{ transform: `translate(${transformX * 20}px, ${transformY * 20}px)`}}>
					{words.map((word, i) => {
						const wordClass = this.getWordClass(i, activeIdx);
						return(
							<div className={`word ${wordClass}`} key={word} onClick={this.increment}>
								{word}
							</div>
						);
					})}
					<img className='image' src={rock} />
					<img className='leaf' src={leaf} />
				</article>
			</main>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


// <svg className='resume' fill='#fff' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
// 	<path d="m445 93-120-90c-2.548-1.911-5.774-3-9-3h-240c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15v-391.894c.019-4.381-2.027-9.126-6-12.106zm-114-48 60 45h-60zm-240 437v-452h210v75c0 8.284 6.716 15 15 15h105v362z"/>
// </svg>
