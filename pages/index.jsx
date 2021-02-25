import { useState } from "react"

import Layout from "../components/Layout"
import FormCard from "../components/Form"
import homePageStyles from "../styles/homePage"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(homePageStyles)

const Index = () => {
	const classes = useStyles()

	const [tabValue, setTabValue] = useState(0)

	const handleTabChange = (_, newValue) => {
		setTabValue(newValue)
	}

	const tabItems = [
		"Flights",
		"Online check-in",
		"Manage booking",
		"Flight status",
	]

	return (
		<Layout>
			<Grid container className={classes.root}>
				<Grid
					className={classes.container}
					item
					xs={10}
					sm={8}
					md={7}
					lg={7}
				>
					<div className={classes.textArea}>
						<Typography className={classes.headerText}>
							You Believe. We Fly.
						</Typography>

						<Typography className={classes.subheaderText}>
							Find the best deals on flights right here.
						</Typography>
					</div>

					<div className={classes.tabWrapper}>
						<Paper elevation={0} className={classes.tabPaper}>
							<Tabs
								value={tabValue}
								onChange={handleTabChange}
								indicatorColor="secondary"
								textColor="secondary"
								centered
							>
								{tabItems.map((item, index) => (
									<Tab
										className={classes.tabHeaderText}
										label={item}
										key={index}
									/>
								))}
							</Tabs>
						</Paper>
					</div>

					<FormCard />
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Index
