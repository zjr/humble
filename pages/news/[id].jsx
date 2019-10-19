import React from 'react';
import Link from 'next/link';

import ghost from '../../config/ghost';
import Layout from '../../components/layout';

NewsPage.getInitialProps = async req => {
	return {
		post: await ghost.posts.read({ id: req.query.id })
	};
};

export default function NewsPage({ post }) {
	// See here for other post information
	// console.log(post);

	return (
		<Layout title={post.title}>
			<h1>{post.title}</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<br />
			<Link href="/news">
				<a>Back to News</a>
			</Link>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</Layout>
	);
}
