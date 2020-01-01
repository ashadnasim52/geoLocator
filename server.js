const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: path.join('config', 'config.env') });

const stores = require('./routes/stores');
const mongoDb = require('./config/db');

const app = express();

app.use(express.static(path.join(__dirname, 'view')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/api/v1', stores);

const PORT = process.env.PORT || 5000;

mongoDb()
	.then(() => {
		app.listen(PORT, () =>
			console.log(
				`server is running in ${process.env.ENV} mode in port ${process.env.PORT}`
			)
		);
	})
	.catch(err => {
		throw err;
	});
