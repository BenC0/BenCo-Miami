export default function pageSwap(page = "") {
    document.body.classList.remove('nav-active')
    document.body.setAttribute("page", page)
    window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}