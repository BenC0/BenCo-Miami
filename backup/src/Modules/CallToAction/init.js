import './CallToAction.css';
import React from 'react';

function CallToAction(props) {
	return [
		<div className="cta-container">
			<a className="cta" href={props.cta.link} target={props.cta.target}>
				<span className="icon">{props.cta.icon}</span>
				<span className="label">{props.cta.text}</span>
			</a>
		</div>
	]
}

export default CallToAction;
