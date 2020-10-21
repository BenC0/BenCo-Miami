import "./PageTitle.css"
import React from 'react';

import PalmTree from "./assets/Palm-Tree-SVG"

export function Shapes(props) {
	console.log(props)
	let Shapes = <div className="background"></div>
	switch (props.title) {
		case "Benji Cohen":
			Shapes = [
						<div className="background">
							<div className="shape"></div>
							<div className="shape"></div>
							<div className="shape"></div>
							<div className="circle"></div>
							<div className="palm-tree right"> <PalmTree /> </div>
						</div>,
						<div className="background foreground">
							<div className="shape"></div>
							<div className="shape"></div>
							<div className="shape"></div>
						</div>
					]
			break;
		default:
			Shapes = <div className="background">
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
				</div>
			break;
	}
	return Shapes
} 

function PageTitle(props) {
	return [
		<div id="pageTitle" className="content m-span-4 d-span-12">
			<div className="title_container">
				<Shapes title={props.title} />
				<h1 className="title">{props.title}</h1>
			</div>
		</div>
	]
}

export default PageTitle;
