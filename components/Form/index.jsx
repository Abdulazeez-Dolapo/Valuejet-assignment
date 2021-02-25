import { useState, useRef } from "react"

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

const useStyles = makeStyles(theme => ({
	cardWrapper: {
		width: "100%",
		minHeight: "30vh",
		borderRadius: "10px",
		padding: "1rem 4.2rem",
	},
	tripType: {
		paddingRight: "1.8rem",
	},
	autocomplete: {
		textAlign: "center",
		border: "1px solid white",
	},
	textField: {},
	button: {
		textTransform: "capitalize",
		borderRadius: "10px",
		height: "2.5rem",
		fontSize: "1.2rem",
	},
	label: {
		fontSize: "0.7rem",
	},
	airportContainer: {
		paddingTop: "2rem",
	},
	itemGrid: {
		padding: "0 1rem",
	},
	select: {
		border: "1px solid white",
	},
}))

const Index = () => {
	const TODAY_DATE = new Date().toISOString().split("T")[0]
	const top100Films = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "Pulp Fiction", year: 1994 },
	]
	const passengersNumber = [1, 2, 3, 4, 5]
	const tripTypeItems = ["Roundtrip", "One-Way", "Multicity"]
	const initialState = {
		tripType: "Roundtrip",
		airportFrom: { title: "" },
		airportTo: { title: "" },
		departureDate: TODAY_DATE,
		arrivalDate: TODAY_DATE,
		passengers: 1,
	}

	const classes = useStyles()
	const [formState, setFormState] = useState(initialState)
	const airportFromRef = useRef()
	const airportToRef = useRef()

	const inputRenderer = params => (
		<TextField {...params} variant="standard" fullWidth />
	)
	const getOptionSelected = (option, anotherOption) =>
		option.id === anotherOption.id

	const handleSubmit = event => {
		event.preventDefault()

		console.log(formState)
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

	return (
		<Card className={classes.cardWrapper}>
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
								options={top100Films}
								value={formState.airportFrom}
								onChange={(event, value) =>
									handleAirportChange(
										event,
										value,
										airportFromRef.current.getAttribute("name")
									)
								}
								getOptionLabel={option => option.title}
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
								options={top100Films}
								value={formState.airportTo}
								onChange={(event, value) =>
									handleAirportChange(
										event,
										value,
										airportToRef.current.getAttribute("name")
									)
								}
								getOptionLabel={option => option.title}
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
						<Grid item className={classes.itemGrid} xs={12} sm={6} md={3}>
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
							/>
						</Grid>

						<Grid item className={classes.itemGrid} xs={12} sm={6} md={3}>
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
							/>
						</Grid>

						<Grid item className={classes.itemGrid} xs={12} sm={6} md={3}>
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

						<Grid item className={classes.itemGrid} xs={12} sm={6} md={3}>
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
		</Card>
	)
}

export default Index
