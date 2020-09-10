import './styles/style.scss';
import contentCycle from "./scripts/content-cycle"

function init() {
	contentCycle.fade()
}

document.addEventListener("DOMContentLoaded", init);
