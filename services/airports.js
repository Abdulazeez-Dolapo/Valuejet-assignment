import axiosInstance from "./axios"

const saveToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value))
}

const fetchAirports = async () => {
	const airports = localStorage.getItem("airports")
	let dataToReturn

	if (airports?.length > 0) {
		dataToReturn = { airports: JSON.parse(airports), error: false }
	} else {
		try {
			const { data } = await axiosInstance.get("/flight/all-airports")

			saveToLocalStorage("airports", data.data)
			dataToReturn = { airports: data.data, error: false }
		} catch (error) {
			dataToReturn = {
				error: true,
				message: "An error occurred!. Please try again",
			}
		}
	}

	return dataToReturn
}

export { fetchAirports }
