const Store = require('../model/stores');

exports.getStore = async (req, res) => {
	try {
		const allStores = await Store.find();
		return res.json({
			error: false,
			message: 'All stores are found',
			stores: allStores
		});
	} catch (error) {
		console.log(error);
		return res.json({
			error: true,
			message: 'Something wents wrong, Please try after sometime'
		});
	}
};

exports.addStore = async (req, res) => {
	try {
		const { storeId, address } = await req.body;
		const store = await new Store({
			storeId: storeId,
			address
		}).save();

		if (!store)
			return res.json({
				error: true,
				message: 'Something wents wrong, Please try after sometime'
			});
		return res.json({
			error: true,
			message: 'store added',
			store
		});
	} catch (error) {
		console.log(error);
		if (error.code === 11000)
			return res.json({
				error: true,
				message: 'Store already exists'
			});
		return res.json({
			error: true,
			message: 'Something wents wrong, Please try after sometime'
		});
	}
};
