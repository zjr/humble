import React from 'react';
import Link from 'next/link';
import ghost from '../config/ghost';

Home.getInitialProps = async () => {
	return {
		posts: await ghost.posts.browse({ limit: 'all' }).catch(console.error)
	};
};

export default function Home({ posts }) {
	return (
		<div>
			<h1>Welcome to Next.js!</h1>
			<Link href="/[slug]" as="/about">
				<a>About</a>
			</Link>
			<ul>
				{posts.map(post => (
					<li key={post.slug}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
