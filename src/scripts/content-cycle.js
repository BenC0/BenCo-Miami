import $ from 'jquery'
import "slick-carousel"
export function content_fade_cycle() {
	let elements = $('.content-fade-cycle')
	if (elements.length == 0) {
		return
	}

	elements.slick({
	    dots: false,
		// infinite: true,
		fade: true,
		arrows: false,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000
	});
}


const contentCycle = {
	fade: content_fade_cycle
}

export default contentCycle