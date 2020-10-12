import "./cv.css";
import React from 'react';
import PageTitle from "../Modules/PageTitle"
import pageSwap from "../Modules/pageSwap"
import Homepage from '../Home/page';
import Toolkit from '../Toolkit/page';
import Experience from '../Experience/page';
import SideProjects from '../SideProjects/page';
import Contact from '../Contact/page';
import ContentSection from "../Modules/ContentSection"

function CV() {
	const CVInfo = {
		"title": "Print this page",
		"copy": <p>Print this page to PDF to save a version of my CV.</p>
	}
	const doPageSwap = false
	pageSwap("CV")
	return [
		<div className="hideOnPrint d-span-12 m-span-4 full-width">
			<PageTitle title={"CV"} />
		</div>,
		<div className="hideOnPrint d-span-12 m-span-4">
			<ContentSection content={CVInfo} />
		</div>,
		<div className="cv_container cv_container-home d-span-12 m-span-4 full-width">
			<Homepage doPageSwap={doPageSwap} />
		</div>,
		<div className="cv_container cv_container-toolkit d-span-12 m-span-4 d-grid-12 m-grid-4 full-width">
			<Toolkit doPageSwap={doPageSwap} />
		</div>,
		<div className="cv_container cv_container-experience d-span-12 m-span-4 full-width">
			<Experience doPageSwap={doPageSwap} />
		</div>,
		<div className="cv_container cv_container-sideprojects d-span-12 m-span-4 full-width">
			<SideProjects doPageSwap={doPageSwap} />
		</div>,
		<div className="cv_container cv_container-contact d-span-12 m-span-4 full-width">
			<Contact doPageSwap={doPageSwap} />
		</div>
	]
}

export default CV;
