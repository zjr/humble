import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export default new GhostContentAPI({
	url: 'https://humbleghost.herokuapp.com',
	key: '543271aba1b92a2286308226c7',
	version: 'v2'
});
