import CircularProgress from "@material-ui/core/CircularProgress"

const Loader = props => {
	const { size } = props

	return <CircularProgress size={size} />
}

export default Loader
