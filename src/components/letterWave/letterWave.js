import React, { useState, useContext } from 'react';
import { joinClasses } from '../../utils.js';
import { store  } from '../../store.js';

import s from './letterWave.module.sass';

export default function LetterWave({ option: word, active }) {

	const globalState = useContext(store);
	const { dispatch, state } = globalState;
	const [overed, toggleOver] = useState(false);
	const letters = word.split('');

	console.log(active);
	const letterStyle = {

	}
	return (
		<div className={joinClasses(s.wrapper, s.active)}>
			{letters.map((letter, i) => (
				<span
					className={joinClasses(s.letter, s[`letter${i}`])}
					key={i}
					style={letterStyle}
				>
					{letter}
				</span>
			))}
		</div>

	);

}
