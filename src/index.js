import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header/header.js';
import TrigCanvas from '../src/components/trigCanvas/trigCanvas.js';
import WordGallery from '../src/components/wordGallery/wordGallery.js';
import { StateProvider } from './store.js'
import { joinClasses } from './utils.js';
import rock from '../assets/rock.jpg'
import leaf from '../assets/leaf.jpg'

import s from './styles.module.sass';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}
	componentDidMount() {
		setTimeout(() => this.setState({
			loading: false
		}), 5000);
		window.onLoad = () => {
			console.log('here');
		}

	}
	render() {
		return (
			<main className={joinClasses(s.main, this.state.loading && s.loading)}>
				<Header />
				<TrigCanvas />
				<WordGallery />
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
