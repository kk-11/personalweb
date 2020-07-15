import React, { useState, useContext } from 'react';
import LetterWave from '../letterWave/letterWave.js';
import { joinClasses } from '../../utils.js';
import { store  } from '../../store.js';

import s from './header.module.sass';

export default function Header() {

	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const [overed, toggleOver] = useState(false);
	const [activateMenu, toggleMenu] = useState(false);

	const handleTransition = (evt) => {
		if (overed && evt.propertyName === 'transform') {
			dispatch({
				type : 'TOGGLE_HEADER',
				payload : {
					headerOpen : !state.headerOpen
				}
			})
			setTimeout(() => toggleMenu(true), 5000);
		}
	}
	const options = [ 'About', 'Thoughts' ];
	return (
		<header className={s.wrapper}>
			<div className={joinClasses(s.menu, state.headerOpen && s.open)}>
				{options.map(option => <LetterWave key={option} option={option} active={activateMenu}/>)}
			</div>
			<div className={joinClasses(s.headerToggle, overed && s.over)} onMouseDown={() => toggleOver(true)} onMouseUp={() => toggleOver(false)}>
				<div className={joinClasses(s.x, state.headerOpen && s.menuOpen)} />
				<div className={joinClasses(s.cta)}>{state.headerOpen ? 'Close' : 'Hold'}</div>
				<div className={joinClasses(s.circleWrap)}>
					<svg className={joinClasses(s.circle)} width="200" height="200">
						<circle className={joinClasses(s.center)} cx="100" cy="100" r="35" onTransitionEnd={(evt) => handleTransition(evt)}></circle>
					</svg>
				</div>
			</div>
		</header>
	);

}
