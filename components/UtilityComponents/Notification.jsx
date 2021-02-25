import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"

const Notification = props => {
	const { open, handleClose, severity, message } = props

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity}>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default Notification
