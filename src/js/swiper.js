import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swiperHomeBannerMobile();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade],
		loop: true,
		effect: "fade",
		// autoplay: {
		// 	delay: 4500,
		// 	disableOnInteraction: false,
		// },
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
	});
}

function swiperHomeBannerMobile() {
	const swiperHomeBannerMobile = new Swiper(".swiper-home-banner-mobile", {
		modules: [Autoplay, Navigation, EffectFade],
		slidesPerView: 1,
		speed: 1200,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: ".home-1-mobile .btn-next",
			prevEl: ".home-1-mobile .btn-prev",
		},
	});
}

// function swiperProductDetail() {
// 	const colLeft = document.querySelector(".col-left");
// 	if (!colLeft) return;

// 	const thumb = colLeft.querySelector(".swiper-product-detail-thumb");
// 	const main = colLeft.querySelector(".swiper-product-detail");
// 	const prevBtn = colLeft.querySelector(".btn-prev");
// 	const nextBtn = colLeft.querySelector(".btn-next");

// 	const swiperThumb = new Swiper(thumb, {
// 		modules: [Autoplay],
// 		spaceBetween: 12,
// 		slidesPerView: 3.5,
// 		freeMode: true,
// 		observer: true,
// 		observeParents: true,
// 		watchSlidesProgress: true,

// 		loop: true,
// 		breakpoints: {
// 			768: {
// 				slidesPerView: 3,
// 				spaceBetween: 16,
// 				direction: "vertical",
// 			},
// 			1024: {
// 				spaceBetween: 15,
// 				slidesPerView: 3,
// 				direction: "vertical",
// 			},
// 			1200: {
// 				slidesPerView: 4,
// 				spaceBetween: 20,
// 				direction: "vertical",
// 			},
// 		},
// 	});

// 	const swiperDetail = new Swiper(main, {
// 		spaceBetween: 10,
// 		slidesPerView: 1,

// 		loop: true,
// 		observer: true,
// 		observeParents: true,
// 		modules: [Autoplay, Navigation, Thumbs],
// 		thumbs: {
// 			swiper: swiperThumb,
// 		},
// 		navigation: {
// 			nextEl: nextBtn,
// 			prevEl: prevBtn,
// 		},
// 	});

// 	window.productDetailSwiper = {
// 		element: colLeft,
// 		swiperThumb,
// 		swiperDetail,
// 	};
// }
