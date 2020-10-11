import React from 'react';

function ContentSection(props) {
	return [
		<div className="content m-span-3 d-span-12">
			<h2 className="subtitle">{props.content.title}</h2>
			<div className="copy">{props.content.copy}</div>
		</div>
	]
}

export default ContentSection;
