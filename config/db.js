const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

console.log(mongoUri);

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(mongoUri, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true
		});
		if (connection) {
			console.log(`mongodb is connected`);
		}
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
