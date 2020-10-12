import React from 'react';
import PageTitle from "../Modules/PageTitle"
import SectionTitle from "../Modules/SectionTitle"
import pageSwap from "../Modules/pageSwap"
import ContentSection from "../Modules/ContentSection"

function Experience(props) {
	let doPageSwap = props.doPageSwap !== null || props.doPageSwap !== undefined ? props.doPageSwap : true
	if (!!doPageSwap) {
		pageSwap("Experience")
	}
	const PageIntro = {
		"title": "Conversion Optimisation",
		"copy": [
			<p>From Jan 2016, I have been specialising in Conversion Optimisation. My career so far has been focused on a wide range of testing tools and optimisation projects.</p>,
			<p>I've been actively involved with every step of the optimisation process, managing tests from concept through to analysis.</p>
		]
	}
	const AmbroseWilson = {
		"title": "Ambrose Wilson / N Brown",
		"copy": [
			<p>Ambrose Wilson is an N Brown brand specialising in clothing for 65+ women. Other N Brown brands include Jacamo, Simply Be and JD Williams.</p>,
			<p>During my time at N Brown I have been solely responsible for the testing and optimisation program for the Ambrose Wilson website. This has included planning out the testing roadmap, designing and developing A/B tests & personalisation experiences, monitoring and analysing test data and reporting results to relevant stakeholders. In addition to this, I have also collaborated with members of the other CRO teams to in the planning, development, and analysis of cross-brand testing activity.</p>,
			<strong>Responsibilities:</strong>,
			<p>CRO Strategy / A/B & MVT Testing / Personalisation / Marketing Campaign Messaging / Report Automation / User Journey Mapping</p>,
			<strong>Toolkit:</strong>,
			<p>Monetate / Teradata / HTML /  CSS / JavaScript / SQL / Python</p>
		]
	}
	const JurysInn = {
		"title": "Jurys Inn",
		"copy": [
			<p>A hotel chain specialising in city-centre locations across the UK (and a location in Prague)</p>,
			<strong>Responsibilities:</strong>,
			<p>A/B & MVT Testing / Personalisation / Site Speed Optimisation / Exit Intent Messaging / On-site Sale Messaging</p>,
			<strong>Toolkit:</strong>,
			<p>Google Optimize 360 / VWO /  Sentient Ascend / HTML / CSS / JavaScript / PHP / Python / SQL</p>
		]
	}
	const MusicMagpie = {
		"title": "Music Magpie",
		"copy": [
			<p>An ecommerce business with brands in the US and UK. They both buy and sell a wide range of Tech, CD's, DVD's & even Lego!</p>,
			<strong>Responsibilities:</strong>,
			<p>A/B Testing / Social Proof Messaging / Exit Intent Messaging</p>,
			<strong>Toolkit:</strong>,
			<p>Google Optimize 360 / VWO / HTML / CSS / JavaScript / PHP</p>
		]
	}
	const AspinalOfLondon = {
		"title": "Aspinal of London",
		"copy": [
			<p>Aspinal of London is a London designer, manufacturer and retailer of luxury leather goods and accessories for men and women. Held in high regard by many celebrities and social influencers, their clientele includes models, actors and members of the royal family.</p>,
			<strong>Responsibilities:</strong>,
			<p>A/B Testing / Personalisation / Site Speed Optimisation / Exit Intent Messaging</p>,
			<strong>Toolkit:</strong>,
			<p>Google Optimize 360 / VWO / Qubit / HTML / CSS / JavaScript</p>
		]
	}
	const BarrattHomes = {
		"title": "Barratt Homes",
		"copy": [
			<p>Barratt Developments plc is one of the largest residential property development companies in the United Kingdom operating a network of over 30 divisions.</p>,
			<strong>Responsibilities:</strong>,
			<p>A/B Testing / Feature Implementation Testing</p>,
			<strong>Toolkit:</strong>,
			<p>VWO / HTML / CSS / JavaScript / PHP</p>
		]
	}
	const Motoring = {
		"title": "Motoring.co.uk",
		"copy": [
			<p>Motoring.co.uk is a website specialising in car news, reviews, valuations and comparisons. MyMotoring was a sister site that allows users to interact with one another and keep track of important information relating to their vehicle (such as MOT & tax dates).</p>,
			<strong>Responsibilities:</strong>,
			<p>Front End Web Development / HTML Email Development</p>,
			<strong>Toolkit:</strong>,
			<p>HTML / CSS / JavaScript / PHP</p>
		]
	}
	return [
		<PageTitle title={"Experience"} />,
		<div className="experience page d-span-11 m-span-3">
			<ContentSection content={PageIntro} />
			<SectionTitle title={"Who I've Worked with"} />
			<ContentSection content={AmbroseWilson} />
			<ContentSection content={JurysInn} />
			<ContentSection content={MusicMagpie} />
			<ContentSection content={AspinalOfLondon} />
			<ContentSection content={BarrattHomes} />
			<ContentSection content={Motoring} />
		</div>
	]
}

export default Experience;
