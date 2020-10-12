import React from 'react';
import PageTitle from "../Modules/PageTitle"
import pageSwap from "../Modules/pageSwap"
import ContentSection from "../Modules/ContentSection"

function SideProjects() {
	pageSwap("SideProjects")
	const loCRO = {
		title: "loCRO",
		"copy": [
			<p> A tool to allow A/B tests to be developed on a local version of a clients website. Built with python, the tool will scrape the desired webpage, store all assets locally and integrate your development environment with it. In my case, it allowed me to make use of node modules such as browser-sync, sass and babel. </p>,
			<p> This tool not only speeds up development time by reducing time wasted on reloading the web page (which adds up to a surprising amount depending on the website) and also allows you to work offline, perfect for when travelling to meetings. </p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript / Python</p>
		]
	}
	const ClassyRoyale = {
		title: "Classy Royale",
		"copy": [
			<p>Clash Royale Ladder Game Tracker </p>,
			<p><a href="https://classyroyale.netlify.app/" rel="noopener noreferrer" target="_blank">https://classyroyale.netlify.app/</a> - (Use Code "QLLUJGVY" for example data.)</p>,
			<p>Using Python to handle the APIs and my knowledge of web development, I created this tool while on furlough to enable users to monitor and analyse their game performance. While the project was hindered by an understandably limited access to player data, this was a good side project as it allowed me to further develop my understanding of UI/UX design. Most of my work is focused on e-commerce and this project was the first opportunity I had to work on an analytical tool. </p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript / Python / Google Analytics / Hotjar</p>
		]
	}
	const SocialProof = {
		title: "Social Proof Messaging",
		"copy": [
			<p>Project used in A/B tests whilst working for iProspect</p>,
			<p>Built in PHP and JavaScript, this tool logs custom events to a database using a purpose built API and returns relevant information to be displayed back to the user.</p>,
			<p>The tool was used to display messaging such as "X people have bought this in the last Y hours"</p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript / Python</p>
		]
	}
	const enCapture = {
		title: "enCapture",
		"copy": [
			<p>Exit intent behaviour targeted messaging.</p>,
			<p>Whilst at iProspect I aided in the development of a JavaScript function that detects exit intent behaviour and displays a popup modal to user, highlighting an offering or the website KSP's to retain the user's interest and aid them in progressing further down the funnel.</p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript</p>
		]
	}
	const ToTu = {
		title: "This Site",
		"copy": [
			<p>This site is always evolving, this design is actually the 8th since I started 6 years ago!</p>,
			<p>The current version is served through Netlify and linked to the repo at <a rel="noopener noreferrer" href="https://github.com/BenC0/BenCoh-Miami" target="_blank">https://github.com/BenC0/BenCoh-Miami</a> </p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript / React</p>
		]
	}
	const Misc = {
		title: "Misc.",
		"copy": [
			<p>There are loads of small examples and projects done for the purpose of curiosity and learning on my <a rel="noopener noreferrer" href="https://codepen.io/Benco/" target="_blank">Codepen</a></p>,
		]
	}
	return [
		<PageTitle title={"Side Projects"} />,
		<div className="sideProjects page d-span-11 m-span-3">
			<ContentSection content={loCRO} />
			<ContentSection content={ClassyRoyale} />
			<ContentSection content={SocialProof} />
			<ContentSection content={ToTu} />
			<ContentSection content={enCapture} />
			<ContentSection content={Misc} />
		</div>
	]
}

export default SideProjects;
