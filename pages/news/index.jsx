import React from 'react';
import Link from 'next/link';

import ghost from '../../config/ghost';
import Layout from '../../components/layout';

News.getInitialProps = async () => {
	const data = await ghost.posts
		.browse({ filter: 'tag:news', fields: 'id, title' })
		.catch(console.error);

	return { posts: data, meta: data.meta };
};

export default function News({ posts, meta }) {
	// See here for other post & paging (meta) information
	// console.log({ posts, meta });

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
