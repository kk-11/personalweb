import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header/header.js';
import TrigCanvas from '../src/components/trigCanvas/trigCanvas.js';
import WordGallery from '../src/components/wordGallery/wordGallery.js';
import CursorFollow from '../src/components/cursorFollow/cursorFollow.js';
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
			xp: 0,
			yp: 0,
			cursorFollow: false
		}
		this.mouseX = 0;
		this.mouseY = 0;
	}
	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 5000);
		window.addEventListener('mousemove', this.handleMouseMove);
		const { innerWidth: w, innerHeight: h } = window;
		this.height = h;
		this.width = w;

		this.xp = 0;
		this.yp = 0;
		setInterval(this.handleInterval, 20);

	}
	handleInterval = () => {
		let oldXp = this.state.xp;
		let oldYp = this.state.yp;
		this.setState({
			xp: oldXp += ((this.mouseX - this.state.xp) / 6),
			yp: oldYp += ((this.mouseY - this.state.yp) / 6)
		})

	}

	handleMouseMove = (evt) => {
		this.mouseX = evt.clientX;
		this.mouseY = evt.clientY
	}

	render() {
		const { yp, xp, loading, cursorFollow } = this.state;
		return (
			<main className={joinClasses(s.main, loading && s.loading)}>
				<Header />
				<TrigCanvas />
				<WordGallery />
				{cursorFollow && <CursorFollow top={yp} left={xp} />}
				<img className='image' src={rock} />
				<img className='leaf' src={leaf} />
			</main>
		)
	}
}

ReactDOM.render(
	<StateProvider>
		<App />
	</StateProvider>,
	document.getElementById('app')
);
