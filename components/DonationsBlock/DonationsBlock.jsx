import React from 'react';

import './DonationsBlock.scss';
import HButton from '../HButton/Hbutton';
import WhiteBlock from '../WhiteBlock/WhiteBlock';

export default function DonationsBlock({}) {
	return (
		<div className="donations-block">
			<WhiteBlock
				head="Yes, we need your help."
				main="Give time."
				body="We need all and any hands, from stylists to people who just keep lines flowing. Sign up in advance, or just show up at an event. We appreciate it all."
				button="Volunteer"
			/>
			<WhiteBlock
				head=""
				main="Give change."
				body="Gifts of any amount are greatly needed & appreciated. Donations purchase supplies and tools. We are a 501c3 nonprofit. Thank you!"
				button="Donate"
			/>
		</div>
	);
}
