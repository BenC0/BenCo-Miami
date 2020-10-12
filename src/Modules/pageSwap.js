export default function pageSwap(page = "") {
	console.log(page)
    document.body.classList.remove('nav-active')
    document.body.setAttribute("page", page)
}