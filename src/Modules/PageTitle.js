import "./PageTitle.css"
import React from 'react';

function PageTitle(props) {
	return [
		<div id="pageTitle" className="content m-span-4 d-span-12">
			<h1 className="title">{props.title}</h1>
		</div>
	]
}

export default PageTitle;
