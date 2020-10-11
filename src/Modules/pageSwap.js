export default function pageSwap(page = "") {
	console.log('sd')
    document.body.classList.remove('nav-active')
    document.body.setAttribute("page", page)
}