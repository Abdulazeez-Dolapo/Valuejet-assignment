import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../utils/theme"

const description =
	"Abdulazeez's attempt at the Value Jet assignment - A Booking Engine"

const title = "Booking Engine"

export default function MyApp(props) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta
					name="viewport"
					content="width=device-width,maximum-scale=1,initial-scale=1"
				/>
				<meta property="og:type" content="portfolio website" />
				<meta name="og:title" property="og:title" content={title} />
				<meta
					name="og:description"
					property="og:description"
					content={description}
				/>
				<meta property="og:image" content="/adedotun_logo.svg" />
				<meta property="og:site_name" content="Booking Engine" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-col</meta>or" content="#ffffff" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
