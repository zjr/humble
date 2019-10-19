import React from 'react';
import Head from 'next/head';

import '../../styles/main.scss';

const baseTitle = 'Humble Hairdressers';

export default function Layout({ title, children, className }) {
	return (
		<div className={className}>
			<Head>
				<title>{title ? `${title} | ${baseTitle}` : baseTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<>{children}</>
		</div>
	);
}
