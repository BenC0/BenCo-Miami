import React from 'react';

function Title(props) {
	return [
		<div className="SectionTitle content m-span-4 d-span-12">
			<h2 className="title">{props.title}</h2>
		</div>
	]
}

export default Title;
