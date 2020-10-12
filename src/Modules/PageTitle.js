import "./PageTitle.css"
import React from 'react';

function PageTitle(props) {
	return [
		<div id="pageTitle" className="content m-span-4 d-span-12">
			<div className="title_container">
				<div className="background">
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
					<div className="shape"></div>
				</div>
				<h1 className="title">{props.title}</h1>
			</div>
		</div>
	]
}

export default PageTitle;
