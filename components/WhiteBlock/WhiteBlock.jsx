import React from 'react';
import Link from 'next/link';

import HButton from '../HButton/Hbutton';

import './WhiteBlock.scss';

export default function WhiteBlock({ head, main, body, button, link, as }) {
	return (
		<div className="white-block">
			<h5>{head}</h5>
			<h2>{main}</h2>
			<p>{body}</p>
			{button && (
				<Link href={link} as={as}>
					<a>
						<HButton dark text={button} />
					</a>
				</Link>
			)}
		</div>
	);
}
