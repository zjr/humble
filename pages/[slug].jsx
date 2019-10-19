import React from 'react';

import ghost from '../config/ghost';
import Layout from '../components/layout';

import '../styles/page.scss';

Page.getInitialProps = async req => {
	return {
		page: await ghost.pages.read({ slug: req.query.slug })
	};
};

export default function Page({ page }) {
	// See here for other page information
	console.log(page);

	return (
		<Layout title={page.title} className="page">
			<div className="hero">
				<div className="menu">
					<div className="hamburger">
						<div />
						<div />
						<div />
					</div>
					<div className="right">
						<img src="/images/HumbleHairdressersLogoLight.png" alt="h arrow" />
						<h5>humble hairdressers</h5>
					</div>
				</div>
				<div className="text-content">
					<h1>{page.title}</h1>
					<p className="excerpt">{page.custom_excerpt || page.excerpt}</p>
				</div>
			</div>
			<div className="sub-hero">
				<div className="feature-block">
					<h3 className="title">The people are amazing.</h3>
					<p className="text">
						Don’t get us wrong, it’s hard work. But the gratification is worth
						it. Nothing is cooler than showing up and delivering one when no one
						is expecting it.
					</p>
				</div>
				<img className="feature-image" src={page.feature_image} alt="" />
			</div>
			<div dangerouslySetInnerHTML={{ __html: page.html }} />
		</Layout>
	);
}
