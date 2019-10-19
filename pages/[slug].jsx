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
		<Layout title={page.title}>
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
				<h1>{page.title}</h1>
				<div className="home-ctas">
					<HButton text="Donate" />
					<HButton text="Volunteer" />
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: page.html }} />
		</Layout>
	);
}
