import React from 'react';
import PageTitle from "../Modules/PageTitle/init"
import pageSwap from "../Modules/Utils/pageSwap"
import Section from "../Modules/Content/Section"

function Toolkit(props) {
	let doPageSwap = props.doPageSwap !== null || props.doPageSwap !== undefined ? props.doPageSwap : true
	if (!!doPageSwap) {
		pageSwap("Toolkit")
	}
	const CodingLanguages = {
		title: "Coding Languages",
		"copy": <p>Javascript & jQuery<br />HTML<br />CSS and SASS/SCSS<br />Python</p>
	}
	const CodingTools = {
		title: "Coding Tools & Frameworks",
		"copy": <p>Webpack<br />Gulp<br />React<br />WordPress<br />Shopify<br />AWS</p>
	}
	const DesignTools = {
		title: "Design Tools",
		"copy": <p>Adobe XD<br />Adobe Photoshop<br />Adobe Illustrator</p>
	}
	const OptimisationTools = {
		title: "Optimisation Tools",
		"copy": <p>VWO<br />Qubit<br />Google Optimize 360<br />Sentient Ascend<br />Monetate<br />Adobe Target<br />Hotjar<br />Sessioncam<br />Google Analytics 360</p>
	}
	const SiteSpeedOptimisation = {
		title: "Site Speed Optimisation",
		"copy": <p>Speedcurve<br />GT Metrix</p>
	}
	return [
		<PageTitle title={"Toolkit"} />,
		<div className="toolkit page d-span-11 m-span-3">
			<Section content={CodingLanguages} />
			<Section content={CodingTools} />
			<Section content={OptimisationTools} />
			<Section content={SiteSpeedOptimisation} />
			<Section content={DesignTools} />
		</div>
	]
}

export default Toolkit;
