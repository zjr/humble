import React from 'react';

import './WhiteBlock.scss';
import HButton from '../HButton/Hbutton';

export default function WhiteBlock({ head, main, body, button, link }) {
	return (
		<div className="white-block">
			<h5>{head}</h5>
			<h2>{main}</h2>
			<p>{body}</p>
			{button && (
				<a href={link}>
					<HButton dark text={button} />
				</a>
			)}
		</div>
	);
}
