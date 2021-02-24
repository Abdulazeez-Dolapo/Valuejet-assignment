import Image from "next/image"
import Link from "next/link"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
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
}))

const Header = () => {
	const classes = useStyles()

	const navLinks = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Hotels",
			href: "/",
		},
		{
			name: "Charter",
			href: "/",
		},
		{
			name: "About",
			href: "/",
		},
	]

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid className={classes.logo} item xs={12} sm={4} md={4} lg={4}>
					<Image
						src="/images/logo.svg"
						alt="ValueJet logo"
						width={157}
						height={55}
					/>
				</Grid>

				<Grid
					className={classes.navItems}
					item
					xs={12}
					sm={4}
					md={4}
					lg={4}
				>
					{navLinks.map((navLink, index) => (
						<Typography className={classes.headerText} key={index}>
							<Link href={navLink.href}>
								<a className={classes.link}>{navLink.name}</a>
							</Link>
						</Typography>
					))}
				</Grid>

				<Grid className={classes.signIn} item xs={12} sm={4} md={4} lg={4}>
					<Typography className={classes.headerText}>
						<Link href="/">
							<a className={classes.link}>Sign in</a>
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default Header
