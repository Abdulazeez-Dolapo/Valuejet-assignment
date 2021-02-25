const homePageStyles = theme => ({
	root: {
		height: "92vh",
		display: "flex",
		justifyContent: "center",
	},
	container: {
		paddingTop: "6rem",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	textArea: {
		width: "100%",
		textAlign: "center",
	},
	tabWrapper: {
		width: "90%",
		marginBottom: "2rem",
	},
	tabPaper: {
		width: "100%",
		height: "3rem",
	},
	headerText: {
		fontSize: "2.9rem",
		fontWeight: 600,
	},
	subheaderText: {
		fontSize: "1.5rem",
		fontWeight: 500,
		padding: "1rem 0",
	},
	tabHeaderText: {
		textTransform: "capitalize",
		fontSize: "1.2rem",
		fontWeight: 500,
	},
})

export default homePageStyles
