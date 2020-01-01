const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoCoder = require('../utils/geoCoder.js');

const StoreSchema = new Schema({
	storeId: {
		type: String,
		required: [true, 'StoreId is requried'],
		maxlength: [10, 'store id must be greatter than 10chars'],
		unique: true
	},
	address: {
		type: String,
		required: [true, 'address is requried']
	},
	location: {
		type: {
			type: String,
			enum: ['Point']
		},
		coordinates: {
			type: [Number],
			index: '2dsphere'
		},
		formattedAddress: String,
		createdAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// Geocode & create location
StoreSchema.pre('save', async function(next) {
	const loc = await geoCoder.geocode(this.address);
	console.log(loc);

	this.location = {
		type: 'Point',
		coordinates: [loc[0].latitude, loc[0].longitude],
		formattedAddress: loc[0].formattedAddress
	};
	this.address = undefined;

	next();
});

module.exports = Store = mongoose.model('stores', StoreSchema);
