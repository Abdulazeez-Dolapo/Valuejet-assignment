import Image from "next/image"
import Link from "next/link"
import headerStyles from "../../styles/header"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(headerStyles)

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
				<Grid className={classes.logo} item xs={6} sm={4} md={4} lg={4}>
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
