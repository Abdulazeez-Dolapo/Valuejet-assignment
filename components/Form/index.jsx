import { useState, useRef, useEffect, Fragment } from "react"

import { fetchAirports } from "../../services/airports"
import {
	isDepartureDateValid,
	isArrivalDateValid,
	isAirportValid,
	isFormValid,
} from "../../utils/validation"
import formCardStyles from "../../styles/formCard"
import Loader from "../UtilityComponents/Loader"
import Notification from "../UtilityComponents/Notification"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(formCardStyles)

const FormCard = () => {
	const TODAY_DATE = new Date().toISOString().split("T")[0]
	const DEFAULT_AIRPORT = { airCode: "CODE", airportName: "Airport Name" }

	const passengersNumber = [1, 2, 3, 4, 5]
	const tripTypeItems = ["Roundtrip", "One-Way", "Multicity"]
	const initialState = {
		tripType: "Roundtrip",
		airportFrom: DEFAULT_AIRPORT,
		airportTo: DEFAULT_AIRPORT,
		departureDate: TODAY_DATE,
		arrivalDate: TODAY_DATE,
		passengers: 1,
	}

	const classes = useStyles()
	const [formState, setFormState] = useState(initialState)
	const [airports, setAirports] = useState([])
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(false)
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)
	const [severity, setSeverity] = useState("success")
	const [notificationStatus, setNotificationStatus] = useState(false)

	const airportFromRef = useRef()
	const airportToRef = useRef()

	const helperText = message => {
		return <span className={classes.helperText}>{message}</span>
	}

	const inputRenderer = params => {
		const getHelperText = () => {
			// Choose airport to show helper text for based on the id of the autocomplete
			const airport =
				params.id === "From" ? formState.airportFrom : formState.airportTo
			const showHelperText = isFormSubmitted && !isAirportValid(airport)

			return showHelperText && helperText("Please choose a valid airport")
		}

		return (
			<TextField
				{...params}
				variant="standard"
				fullWidth
				helperText={getHelperText()}
			/>
		)
	}
	const getOptionSelected = (option, anotherOption) =>
		option.id === anotherOption.id

	const displayNotification = (message, notificationType) => {
		setMessage(message)
		setSeverity(notificationType)
		setNotificationStatus(true)
	}

	const handleSubmit = event => {
		event.preventDefault()
		setIsFormSubmitted(true)

		if (!isFormValid(formState)) return

		displayNotification("Form submitted successfully", "success")
	}
	const handleChange = event => {
		const { name, value } = event.target

		setFormState({
			...formState,
			[name]: value,
		})
	}
	const handleAirportChange = (_, value, name) => {
		setFormState({
			...formState,
			[name]: value,
		})
	}

	const handleNotificationClose = () => {
		setNotificationStatus(false)
	}

	useEffect(async () => {
		setLoading(true)

		const airportData = await fetchAirports()
		if (!airportData?.error) {
			setAirports(airportData.airports)
		} else {
			displayNotification(airportData.message, "error")
		}

		setLoading(false)
	}, [])

	return (
		<Fragment>
			<Card className={classes.cardWrapper}>
				{loading ? (
					<div className={classes.loader}>
						<Loader size="3rem" />
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div>
							<RadioGroup
								row
								aria-label="tripType"
								name="tripType"
								value={formState.tripType}
								onChange={handleChange}
							>
								{tripTypeItems.map(item => (
									<FormControlLabel
										value={item}
										control={<Radio />}
										label={item}
										key={item}
										className={classes.tripType}
									/>
								))}
							</RadioGroup>
						</div>

						<div className={classes.airportContainer}>
							<Grid container>
								<Grid item className={classes.itemGrid} xs={12} sm={6}>
									<InputLabel className={classes.label} id="from">
										From
									</InputLabel>
									<Autocomplete
										ref={airportFromRef}
										id="From"
										name="airportFrom"
										size="small"
										options={airports}
										value={formState.airportFrom}
										onChange={(event, value) =>
											handleAirportChange(
												event,
												value,
												airportFromRef.current.getAttribute("name")
											)
										}
										getOptionLabel={option =>
											`${option.airCode} - ${option.airportName}`
										}
										getOptionSelected={getOptionSelected}
										renderInput={inputRenderer}
										disableClearable
										className={classes.autocomplete}
									/>
								</Grid>

								<Grid item className={classes.itemGrid} xs={12} sm={6}>
									<InputLabel className={classes.label} id="to">
										To
									</InputLabel>
									<Autocomplete
										ref={airportToRef}
										id="To"
										name="airportTo"
										size="small"
										options={airports}
										value={formState.airportTo}
										onChange={(event, value) =>
											handleAirportChange(
												event,
												value,
												airportToRef.current.getAttribute("name")
											)
										}
										getOptionLabel={option =>
											`${option.airCode} - ${option.airportName}`
										}
										getOptionSelected={getOptionSelected}
										renderInput={inputRenderer}
										disableClearable
										className={classes.autocomplete}
									/>
								</Grid>
							</Grid>
						</div>

						<div className={classes.airportContainer}>
							<Grid container>
								<Grid
									item
									className={classes.itemGrid}
									xs={12}
									sm={6}
									md={3}
								>
									<InputLabel
										className={classes.label}
										id="departureDate-label"
									>
										Departing
									</InputLabel>

									<TextField
										id="departureDate"
										value={formState.departureDate}
										name="departureDate"
										type="date"
										className={classes.textField}
										onChange={handleChange}
										fullWidth
										helperText={
											!isDepartureDateValid(
												formState.departureDate
											) &&
											helperText(
												"Departure date can not be before today"
											)
										}
									/>
								</Grid>

								<Grid
									item
									className={classes.itemGrid}
									xs={12}
									sm={6}
									md={3}
								>
									<InputLabel
										className={classes.label}
										id="arrivalDate-label"
									>
										Arriving
									</InputLabel>

									<TextField
										id="arrivalDate"
										value={formState.arrivalDate}
										name="arrivalDate"
										type="date"
										className={classes.textField}
										onChange={handleChange}
										fullWidth
										helperText={
											!isArrivalDateValid(
												formState.arrivalDate,
												formState.departureDate
											) &&
											helperText(
												"Arrival date can not be before departure date"
											)
										}
									/>
								</Grid>

								<Grid
									item
									className={classes.itemGrid}
									xs={12}
									sm={6}
									md={3}
								>
									<InputLabel
										className={classes.label}
										id="Passengers-label"
									>
										Passengers
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={formState.passengers}
										onChange={handleChange}
										fullWidth
										name="passengers"
										className={classes.select}
									>
										{passengersNumber.map(num => (
											<MenuItem key={num} value={num}>
												{num}
											</MenuItem>
										))}
									</Select>
								</Grid>

								<Grid
									item
									className={classes.itemGrid}
									xs={12}
									sm={6}
									md={3}
								>
									<Button
										variant="contained"
										disableElevation
										color="secondary"
										type="submit"
										className={classes.button}
										fullWidth
									>
										Search
									</Button>
								</Grid>
							</Grid>
						</div>
					</form>
				)}
			</Card>

			<Notification
				open={notificationStatus}
				message={message}
				severity={severity}
				handleClose={handleNotificationClose}
			/>
		</Fragment>
	)
}

export default FormCard
