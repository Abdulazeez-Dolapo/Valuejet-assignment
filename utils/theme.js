import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"Poppins",
			"Inter",
			"Arial",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	palette: {
		primary: {
			main: "#AD3391",
		},
		secondary: {
			main: "#4E1440",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#FFFFFF",
		},
	},
})

export default theme
