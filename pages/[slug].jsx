import React from 'react';
import Link from 'next/link';

import ghost from '../config/ghost';
import Layout from '../components/layout';

Page.getInitialProps = async req => {
	return {
		page: await ghost.pages.read({ slug: req.query.slug })
	};
};

export default function Page({ page }) {
	// See here for other page information
	// console.log(page);

	return (
		<Layout title={page.title}>
			<h1>{page.title}</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<div dangerouslySetInnerHTML={{ __html: page.html }} />
		</Layout>
	);
}
