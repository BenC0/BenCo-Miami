export function position_element(parent_element, target_element, coord = 0) {
	let bounding = document.querySelector(parent_element).getBoundingClientRect();
	let height = bounding.height;
	let width = bounding.width;
	let vpos = coord * height;
	let hpos = coord * width;
	let tgt = document.querySelector(target_element);
	tgt.setAttribute("style", `top: ${vpos}px; left: ${hpos}px;`);
}

export function position_andy(coord = 0) {
	let bounding = document.querySelector('header').getBoundingClientRect();
	let height = bounding.height;
	let width = bounding.width;
	let body_padding = document.querySelector('body').getBoundingClientRect().width / 10;
	let vpos = coord * height;
	let hpos = (coord * width) + body_padding;
	console.log(hpos)
	let tgt = document.querySelector('#andy');
	tgt.setAttribute("style", `top: ${vpos}px; left: ${hpos}px;`);
}

const position = {
	element: position_element,
	andy: position_andy
}

export default position