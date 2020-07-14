import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/shared/header/header.js';
import TrigCanvas from '../src/components/shared/trigCanvas/trigCanvas.js';
import WordGallery from '../src/components/shared/wordGallery/wordGallery.js';
import { StateProvider } from './store.js'
import rock from '../assets/rock.jpg'
import leaf from '../assets/leaf.jpg'

import s from './styles.module.sass';

function App() {
	return (
		<main className={s.main}>
			<Header />
			<TrigCanvas />
			<WordGallery />
			<img className='image' src={rock} />
			<img className='leaf' src={leaf} />
		</main>
	)
}

ReactDOM.render(
	<StateProvider>
		<App />
	</StateProvider>,
	document.getElementById('app')
);
