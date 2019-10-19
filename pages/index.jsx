import React from 'react';

// import ghost from '../config/ghost';
import Layout from '../components/layout';
import HButton from '../components/HButton/Hbutton';
import WhiteBlock from '../components/WhiteBlock/WhiteBlock';
import DonationsBlock from '../components/DonationsBlock/DonationsBlock';
import Footer from '../components/Footer/Footer';

// Home.getInitialProps = async () => {
// 	const data = await ghost.posts
// 		.browse({ fields: 'id, title' })
// 		.catch(console.error);
//
// 	return { posts: data, meta: data.meta };
// };

export default function Home() {
	// More info on posts & paging:
	// console.log({ posts, meta });

	// noinspection HtmlUnknownTarget
	return (
		<Layout className="home">
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
				<h1>We provide quality, no-charge services for those in need.</h1>
				<div className="home-ctas">
					<HButton text="Donate" />
					<HButton text="Volunteer" />
				</div>
			</div>

			<div className="second-block">
				<img
					src="/images/womanSmilingHair.jpg"
					alt="a woman getting her hair cut smiling"
				/>
				<WhiteBlock
					head="It's not just a haircut."
					main="We change perceptions, one cut at a time."
					button="About us"
					link="/slug"
					as="/about"
				/>
			</div>
			<img
				alt=""
				className="large-bg-logo"
				src="/images/HumbleHairdressersLogoLight.png"
			/>

			<h2 className="banner-text">
				When you change how people see themselves, it changes how others see
				them, too.
			</h2>

			<div className="bottom-block">
				<img
					src="/images/groupSmiling.jpg"
					alt="group of hair stylists and people getting hair cut"
				/>
				<DonationsBlock />
			</div>
			<Footer />
		</Layout>
	);
}
