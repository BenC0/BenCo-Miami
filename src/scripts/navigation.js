
export function nav_click(e) {
	let nav = document.querySelector('nav')
	if (e.currentTarget.classList.contains('logo')) {
		if (document.body.classList.contains('hide_menu')) {
			let navItems = nav.children
			let el = e.currentTarget
			navItems.forEach(nI => {
				nI.classList.remove('active')
			})
			document.body.classList.remove('hide_menu')
			document.body.classList.add('active_header')
		}
	} else if (document.body.classList.contains('active_header')) {
		let navItems = nav.children
		let el = e.currentTarget
		navItems.forEach(nI => {
			nI.classList.remove('active')
		})
		el.classList.add('active')
		document.body.classList.add('hide_menu')
		document.body.classList.remove('active_header')
		document.querySelector('.page[page="Skills"]').classList.add('active_page')
	} else if (document.body.classList.contains('hide_menu')) {
		document.body.classList.remove('hide_menu')
		document.body.classList.add('active_header')
		document.querySelector('.page[page="Skills"]').classList.remove('active_page')
	}
}

export function init() {
	let nav = document.querySelector('nav')
	let navItems = nav.children

	navItems.forEach(nI => {
		nI.addEventListener('click', nav_click)
	})
	document.querySelector('.logo').addEventListener('click', nav_click)
}

const navigation = {
	init: init
}

export default navigation
