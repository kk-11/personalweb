import React, { useState, useContext } from 'react';
import { joinClasses } from '../../utils.js';
import { store  } from '../../store.js';

import s from './cursorFollow.module.sass';

export default function CursorFollow({ top, left }) {
	// const globalState = useContext(store);
	// const { dispatch, state } = globalState;

	const style = {
		top: `${top}px`,
		left: `${left}px`
	}

	return (
		<div className={s.wrapper} style={style} />
	);

}
