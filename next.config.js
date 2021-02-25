const dotenv = require("dotenv")

dotenv.config()

module.exports = {
	env: {
		API_KEY: process.env.API_KEY,
		BASE_URL: process.env.BASE_URL,
	},
}
