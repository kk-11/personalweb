import React from 'react';
import { createEmptyArray, getRandomColor } from './utils.js';
import Bio from './bio/bio.js';
import Experiments from './experiments/experiments.js'
import BurgerMenu from './burgerMenu/burgerMenu.js'
import s from './App.module.css';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		const {
			innerHeight: h,
			// innerWidth: w
		} = window;
		this.renderLines = this.renderLines.bind(this)
		const denominator = 21;
		this.lines = createEmptyArray(denominator)
		this.lineHeight = (h / denominator);
		this.state = {
			active: false
		}
	}
	componentDidMount() {
		this.setState({
			active: true
		});
	}
	renderLines() {
		return this.lines.map((line, i) => (
			<div
				key={i}
				className={s.line}
				style={{
					background: getRandomColor(),
					height: this.lineHeight,
					animationDelay: `${i*20}ms`
				}}
			>
				{i}
			</div>
		));
	}
	render() {
		console.log(this.state.active)
		return (
			<main className={s.app}>
				{true && <Bio />}
				{false && this.renderLines()}
				{true && <Experiments />}
				{false && <BurgerMenu />}
			</main>
		);
	}
}

// <span className={`${s.top} ${this.state.active && s.active}`}></span>
// <span className={`${s.bottom}  ${this.state.active && s.active}`}></span>
// <span className={`${s.left}  ${this.state.active && s.active}`}></span>
// <span className={`${s.right}  ${this.state.active && s.active}`}></span>
// EXP #1
// ref = https://redstapler.co/three-js-realistic-rain-tutorial/
