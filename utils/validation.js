const isDepartureDateValid = departureDate => {
	const todayDate = new Date().toISOString().split("T")[0]

	return (
		todayDate == departureDate ||
		new Date(departureDate).getTime() >= new Date(todayDate).getTime()
	)
}

const isArrivalDateValid = (arrivalDate, departureDate) => {
	return (
		arrivalDate == departureDate ||
		new Date(arrivalDate).getTime() >= new Date(departureDate).getTime()
	)
}

const isAirportValid = airport => {
	// The default airports value doesn't have an id
	return airport.hasOwnProperty("id")
}

const isFormValid = formData => {
	const { airportFrom, airportTo, departureDate, arrivalDate } = formData

	const validDepartureDate = isDepartureDateValid(departureDate)
	const validArrivalDate = isArrivalDateValid(arrivalDate, departureDate)
	const validAirportFrom = isAirportValid(airportFrom)
	const validAirportTo = isAirportValid(airportTo)

	return (
		validDepartureDate &&
		validArrivalDate &&
		validAirportFrom &&
		validAirportTo
	)
}

export { isDepartureDateValid, isArrivalDateValid, isAirportValid, isFormValid }
