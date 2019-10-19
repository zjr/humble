import React from 'react';
import Link from 'next/link';

import ghost from '../../config/ghost';
import Layout from '../../components/layout';

News.getInitialProps = async () => {
	return {
		posts: await ghost.posts.browse({ filter: 'tag:news' })
	};
};

export default function News({ posts }) {
	// See here for other page information
	// console.log(page);

	// noinspection HtmlUnknownTarget
	return (
		<Layout title="News">
			<h1>News</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<Link href="/news/[id]" as={`/news/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
}
