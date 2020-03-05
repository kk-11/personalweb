import React from 'react';
import s from './burgerMenu.module.scss';

export default class BurgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			active: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			show: true
		});
	}

	handleClick() {
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		return (
			<nav onClick={this.handleClick} className={`${s.wrapper} ${this.state.show && s.show}`}>
				<div className={s.burger}>
					<div className={`${s.top} ${this.state.active ? s.on : s.off}`}></div>
					<div className={`${s.bottom} ${this.state.active ? s.on : s.off}`}></div>
				</div>

			</nav>
		);
	}
}
//<div className={`${s.text} ${this.state.active ? s.on : s.off}`}>BURGER MENU</div>
