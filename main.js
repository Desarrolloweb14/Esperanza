document.addEventListener('DOMContentLoaded' , () => {
	const elementosCarousel = document.querySelectorALL('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 150
	});
});