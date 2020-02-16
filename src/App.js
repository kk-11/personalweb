import React from 'react';
import { createEmptyArray, getRandomColor } from './utils.js';
import * as THREE from 'three';
import Bio from './bio/bio.js';
import Experiments from './experiments/experiments.js'
import s from './App.module.css';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		const {
			innerHeight: h,
			innerWidth: w
		} = window;
		const denominator = 21;
		this.lines = createEmptyArray(denominator)
		this.lineHeight = h / denominator;
		this.cloudParticles = [];
	}
	render() {
		return (
			<main className={s.app}>
				{true && <Bio />}
				<Experiments />
			</main>
		);
	}
}


// EXP #1
// ref = https://redstapler.co/three-js-realistic-rain-tutorial/
