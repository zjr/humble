import React from 'react';
import Link from 'next/link';
import ghost from '../config/ghost';

import '../styles/main.scss';

Home.getInitialProps = async () => {
	return {
		posts: await ghost.posts.browse({ limit: 'all' }).catch(console.error)
	};
};

export default function Home({ posts }) {
	// noinspection HtmlUnknownTarget
	return (
		<div>
			<h1>We provide quality, no-charge services for those in need.</h1>
			<Link href="/[slug]" as="/about">
				<a>About</a>
			</Link>
			<button className="humble-btn">Donate</button>
			<button className="humble-btn">Volunteer</button>

			<div className="white-block">
				<h5>It's not just a haircut.</h5>
				<h2>We change perceptions, one cut at a time.</h2>
			</div>
			<ul>
				{posts.map(post => (
					<li key={post.slug}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
