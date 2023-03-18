const { StatusCodes } = require('http-status-codes')

const headerParser = (req, res) => {
	//Creating map which i will fill with the required entries.
	let data = new Map()

	//iterating over the req.header object where i will get only the pair of key/value that i need.
	for (const [key, value] of Object.entries(req.headers)) {
		if (key == 'user-agent' || key == 'accept-language') {
			data.set(key, value)
		}
	}

	//idk if its ok to use the req.i[/data.get directly in the response or if i should assignt that value to a variable and then use that.
	res.status(StatusCodes.OK).json({
		ipadress: req.ip,
		language: data.get('accept-language'),
		software: data.get('user-agent'),
	})
}

module.exports = { headerParser }
