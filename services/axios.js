import axios from "axios"

const defaultOptions = {
	baseURL: process.env.BASE_URL,
	headers: {
		"x-api-auth": process.env.API_KEY,
	},
}

const axiosInstance = axios.create(defaultOptions)

export default axiosInstance
