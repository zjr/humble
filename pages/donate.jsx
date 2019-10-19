import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';

export default function Donate() {
	// More info on posts & paging:
	// console.log({ posts, meta });

	// noinspection HtmlUnknownTarget
	return (
		<Layout title="Donate">
			<h1>Donate</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<form
				action="https://www.paypal.com/cgi-bin/webscr"
				method="post"
				target="_blank"
			>
				<input type="hidden" name="cmd" value="_s-xclick" />
				<input type="hidden" name="hosted_button_id" value="54AFBC5EEVD3Y" />
				<button type="submit">Make a Donation</button>
				<img
					alt=""
					border="0"
					src="https://www.paypal.com/en_US/i/scr/pixel.gif"
					width="1"
					height="1"
				/>
			</form>
		</Layout>
	);
}
