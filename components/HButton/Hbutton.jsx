import React from 'react';

import './Hbutton.scss';
export default function HButton({ text, onClick, dark }) {
	return (
		<button className={dark ? 'dark h-button underline' : 'h-button underline'} onClick={onClick}>
			{text}
		</button>
	);
}
