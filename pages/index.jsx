import React from 'react';
import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
	url: 'https://humbleghost.herokuapp.com',
	key: '543271aba1b92a2286308226c7',
	version: 'v2'
});

Home.getInitialProps = async () => {
	const posts = await api.posts
		.browse({
			limit: 'all'
		})
		.catch(err => {
			console.error(err);
		});

	return { posts };
};

export default function Home({ posts }) {
	return (
		<div>
			<h1>Welcome to Next.js!</h1>
			<ul>
				{posts.map(post => (
					<li key={post.slug}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
