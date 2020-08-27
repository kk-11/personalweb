import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header/header.js';
import TrigCanvas from '../src/components/trigCanvas/trigCanvas.js';
import WordGallery from '../src/components/wordGallery/wordGallery.js';
import CursorFollow from '../src/components/cursorFollow/cursorFollow.js';
import Fractal from '../src/components/fractal/fractal.js';
import { StateProvider } from './store.js'
import { joinClasses } from './utils.js';
import rock from '../assets/rock.jpg'
import leaf from '../assets/leaf.jpg'

import s from './styles.module.sass';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			cursorFollow: true
		}
	}
	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 5000);
		const { innerWidth: w, innerHeight: h } = window;
		this.height = h;
		this.width = w;
		window.addEventListener('touchmove', (evt) => evt.preventDefault());
	}

	render() {
		const { loading, cursorFollow } = this.state;
		return (
			<main className={joinClasses(s.main, loading && s.loading)}>
				<Header />
				<TrigCanvas />
				<WordGallery />
				{cursorFollow && <CursorFollow />}
				<img className={s.image} src={rock} />
				<img className={s.leaf} src={leaf} />
			</main>
		)
	}
}

ReactDOM.render(
	<StateProvider>
		<App />
		<Fractal />
	</StateProvider>,
	document.getElementById('app')
);
