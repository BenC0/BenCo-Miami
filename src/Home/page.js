import React from 'react';
import PageTitle from "../Modules/PageTitle"
import pageSwap from "../Modules/pageSwap"
import ContentSection from "../Modules/ContentSection"

function Homepage() {
	pageSwap("Home")
	const Content = {
		"title": "Conversion Optimisation Specialist",
		"copy": <p>Currently employed by N Brown Group, I utilise my expertise in web development, UI/UX design and behavioural psychology to optimise websites from a wide variety of sectors to improve their performance.</p>
	}
	return [
		<PageTitle title={"Benji Cohen"} />,
		<div className="home page d-span-11 m-span-3">
			<ContentSection content={Content}/>
		</div>
	]
}

export default Homepage;