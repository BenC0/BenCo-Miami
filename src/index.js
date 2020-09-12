import './styles/style.scss';
import navigation from "./scripts/navigation"

function init() {
	document.body.classList.add('loaded')
	navigation.init()
}

document.addEventListener("DOMContentLoaded", init);
