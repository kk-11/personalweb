import React, { useState, useContext } from 'react';
import {store } from '../../../store.js'
// import s from './styles.module.sass';

import s from './header.module.sass';


export default function Header() {

	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const [overed, toggleOver] = useState(false);
	const handleTransition = (evt) => {
		if (overed && evt.propertyName === 'transform') {
			dispatch({type : 'TOGGLE_HEADER', payload : { headerOpen : !state.headerOpen }})
		}
	}
	console.log(s);
	return (
		<header>
			<div className={`menu ${state.headerOpen && s.open}`} />
			<div className={`headerToggle ${(overed) && 'over'}`} onMouseDown={() => toggleOver(true)} onMouseUp={() => toggleOver(false)}>
				<div className={`x ${state.headerOpen && 'menuOpen'}`} />
				<div className='cta'>{state.headerOpen ? 'Close' : 'Hold'}</div>
				<div className='circleWrap'>
					<svg className='circle' width="200" height="200">
						<circle className="center" cx="100" cy="100" r="35" onTransitionEnd={(evt) => handleTransition(evt)}></circle>
					</svg>
				</div>
			</div>
		</header>
	);

}
