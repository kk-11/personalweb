import React from 'react';
import { joinClasses } from '../../utils.js';

import s from './wordGallery.module.sass';

const words = [ 'Welcome', 'words', 'Memes', 'super', 'xytakjflkajf', 'finalForTesting' ];

export default class WordGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transformX: 0,
			transformY: 0,
			activeIdx: 0
		}
	}

	increment = () => {
		let newIdx = this.state.activeIdx + 1;
		if (newIdx >= words.length) newIdx = 0;
		this.setState({ activeIdx: newIdx });
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
			transformX,
			transformY,
			activeIdx
		} = this.state;

		return (
			<article className={s.wordGallery} style={{ transform: `translate(${transformX * 20}px, ${transformY * 20}px)`}} onClick={this.increment}>
				{words.map((word, i) => {
					const wordClass = this.getWordClass(i, activeIdx);
					return(
						<div className={joinClasses(s.word, s[wordClass])} key={word}>
							{word}
						</div>
					);
				})}
			</article>
		)
	}
}
