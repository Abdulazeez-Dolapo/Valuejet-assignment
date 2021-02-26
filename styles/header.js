const headerStyles = theme => ({
	root: {
		height: "8vh",
		backgroundColor: theme.palette.primary.main,
		paddingTop: "1rem",
		boxShadow: "0 0 8px",
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	signIn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	navItems: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	headerText: {
		fontSize: "1.5rem",
		fontWeight: 400,
	},
	link: {
		color: "black",
		textDecoration: "none",
	},
})

export default headerStyles
