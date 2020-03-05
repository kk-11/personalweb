import React from 'react';
import s from './bio.module.scss';

export default class Bio extends React.Component {
	render() {
		const bio = `My name is killian. I'm passionate about programming amongst other things.
		I'm currently rebuilding this site.. if you have any design tips let me know! 🤔
		I'm currently based in London, happy to move for the right opportunity.
		Ideal stack: react with lots of vanilla JS, and some THREE from time to time.
		killian.debuitleir@gmail.com`.split(' ');
		// this.bio = this.bio;

		return (
			<article className={s.bio}>
				<div className={s.hey}>Hey</div>
				{bio.map((word, i) => {
					word = `${word}_`
					return (
						<span className={s.word} style={{animationDelay: `${i*20}ms`}} key={i}>{word}</span>
					);
				})}
			</article>
		);
	}
}
