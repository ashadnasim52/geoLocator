const nodeGeoCoder = require('node-geocoder');

const options = {
	provider: process.env.GEO_PROVIDER,
	httpAdapter: 'http',
	apiKey: process.env.GEO_API_KEYS,
	formatter: null
};

console.log(options);

const geoCoder = nodeGeoCoder(options);

module.exports = geoCoder;
