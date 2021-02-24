import { Fragment } from "react"

import Header from "./Header"

const Layout = props => {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			{/* Footer would normally go here */}
		</Fragment>
	)
}

export default Layout
