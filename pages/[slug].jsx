import React from 'react';

import ghost from '../config/ghost';
import Layout from '../components/layout';
import HButton from '../components/HButton/Hbutton';

Page.getInitialProps = async req => {
	return {
		page: await ghost.pages.read({ slug: req.query.slug })
	};
};

export default function Page({ page }) {
	// See here for other page information
	// console.log(page);

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
					<p className="subtitle">
						We give haircuts, yes. But a haircut isn’t really just a haircut. We
						raise self-esteem by helping people look how they want to look. A
						haircut is an opportunity to make a choice. We give people who might
						not have many choices a chance to say what they want.
					</p>
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: page.html }} />
		</Layout>
	);
}
