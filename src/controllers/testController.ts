const publicIp = require('public-ip');
const iplocate = require('node-iplocate');
export const testController: any = {};

testController.getIp = async (req, res) => {
	try {
		(async () => {
			// xTerm = await publicIp.v4();
			// console.log('public ip', await publicIp.v4());
			// => '46.5.21.123'
			iplocate(await publicIp.v4()).then(async (results) => {
				// console.log(results);
				res.status(200).json({
					status: true,
					message:
						(await publicIp.v4()) + ' ' + JSON.stringify(results)
				});
			});

			// console.log(await publicIp.v6());
			// => 'fe80::200:f8ff:fe21:67cf'
		})();
		// const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
	} catch (error) {
		console.log(error);
	}
};
