import React from 'react';
import Link from 'next/link';

import ghost from '../config/ghost';
import Layout from '../components/layout';

Home.getInitialProps = async () => {
	const data = await ghost.posts
		.browse({ fields: 'id, title' })
		.catch(console.error);

	return { posts: data, meta: data.meta };
};

export default function Home({ posts, meta }) {
	// More info on posts & paging:
	// console.log({ posts, meta });

	// noinspection HtmlUnknownTarget
	return (
		<Layout>
			<h1>Welcome to Next.js!</h1>
			<Link href="/[slug]" as="/about">
				<a>About</a>
			</Link>
			<br />
			<Link href="/news">
				<a>News</a>
			</Link>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</Layout>
	);
}
