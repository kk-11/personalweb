import React from 'react';
import { joinClasses } from '../../utils.js';
import blob from '../../../assets/blob.png'
import s from './cursorFollow.module.sass';

export default class CursorFollow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			xp: 0,
			yp: 0
		}
		this.mouseX = 0;
		this.mouseY = 0;
		this.xp = 0;
		this.yp = 0;
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove);
		setInterval(this.handleInterval, 20);
	}

	handleMouseMove = (evt) => {
		this.mouseX = evt.clientX;
		this.mouseY = evt.clientY
	}

	handleInterval = () => {
		let oldXp = this.state.xp;
		let oldYp = this.state.yp;
		this.setState({
			xp: oldXp += (this.mouseX - this.state.xp) / 20,
			yp: oldYp += (this.mouseY - this.state.yp) / 20
		})
	}

	render() {
		const { xp, yp } = this.state;
		const style = {
			top: `${yp}px`,
			left: `${xp}px`
		}
		return (
			<div className={s.wrapper} style={style}>
				<div className={s.blob} style={{backgroundImage: `url(${blob})`}}/>
			</div>
		);
	}

}
