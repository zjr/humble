import React from 'react';

import './Hbutton.scss'
export default function HButton({ text, onClick, dark }) {
	return(
		<button className={dark ? "dark h-button" : 'h-button'}  onClick={onClick}>{text}</button>
	)
}
