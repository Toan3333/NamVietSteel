import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	swiperBanner();
	swipeHome4();
	swiperHomeBannerMobile();
	swipeHistory();
	swiperCertification();
	swiperProductDetail();
	swiperProductRelated();
	swiperService();
	swiperServiceOther();
	swiperNewsOther();
}
function swiperBanner() {
	const swiper = new Swiper(".home-1 .swiper", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade],
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
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

function swiperProductDetail() {
	const colLeft = document.querySelector(".product-detail .col-left");
	if (!colLeft) return;

	const thumbWrapper = colLeft.querySelector(".product-slide-thumbs .swiper");
	const mainWrapper = colLeft.querySelector(".product-slide-main .swiper");
	const prevBtn = colLeft.querySelector(".btn-prev");
	const nextBtn = colLeft.querySelector(".btn-next");

	// ⚠️ Quan trọng: phải kiểm tra tồn tại
	if (!thumbWrapper || !mainWrapper) {
		console.warn("Không tìm thấy swiper element.");
		return;
	}

	const swiperThumb = new Swiper(thumbWrapper, {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3.5,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchSlidesProgress: true,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
				direction: "horizontal",
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
				direction: "vertical",
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 29,
				direction: "vertical",
			},
		},
	});

	const swiperDetail = new Swiper(mainWrapper, {
		spaceBetween: 10,
		slidesPerView: 1,
		loop: true,
		observer: true,
		observeParents: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb,
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
	});

	window.productDetailSwiper = {
		element: colLeft,
		swiperThumb,
		swiperDetail,
	};
}

function swipeHome4() {
	const swiperPartner = new Swiper(".home-4 .swiper", {
		modules: [Autoplay],
		slidesPerView: 3,
		spaceBetween: 12,
		speed: 4000, // càng lớn càng chậm
		loop: true,
		freeMode: true,
		allowTouchMove: false,
		autoplay: {
			delay: 0, // chạy liên tục
			disableOnInteraction: false,
		},
		breakpoints: {
			640: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 7.5,
				spaceBetween: 80,
			},
		},
		on: {
			init: function () {
				this.el.querySelector(".swiper-wrapper").style.transitionTimingFunction = "linear";
			},
		},
	});
}

function swipeHistory() {
	const swiperPartner = new Swiper(".about-6 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 12,
		speed: 1500,
		rewind: true,
		// autoplay: {
		// 	delay: 5500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".about-6 .btn-next",
			prevEl: ".about-6 .btn-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		on: {
			init: () => {
				addIndexToCircles(); // Gán index và event click
				updateActiveState(); // Cập nhật class active ban đầu
			},
			transitionStart: updateActiveState, // Gọi khi bắt đầu chuyển slide
		},
	});

	function addIndexToCircles() {
		const slides = document.querySelectorAll(".about-6 .swiper-slide");
		slides.forEach((slide, index) => {
			const circle = slide.querySelector(".circle");
			if (circle) {
				circle.dataset.index = index;
				circle.style.cursor = "pointer";
				circle.addEventListener("click", function (e) {
					e.preventDefault();
					swiperPartner.slideTo(index);
				});
			}
		});
	}

	function updateActiveState() {
		// Xóa active ở tất cả circle và number
		document
			.querySelectorAll(".about-6 .circle")
			.forEach((circle) => circle.classList.remove("active"));
		document
			.querySelectorAll(".about-6 .number")
			.forEach((number) => number.classList.remove("active"));

		// Thêm active vào circle và number ở slide hiện tại
		const activeSlide = document.querySelector(".about-6 .swiper-slide-active");
		if (activeSlide) {
			const circle = activeSlide.querySelector(".circle");
			const number = activeSlide.querySelector(".number");
			if (circle) circle.classList.add("active");
			if (number) number.classList.add("active");
		}
	}
}

function swiperCertification() {
	const swiperPartner = new Swiper(".about-7 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 2,
		spaceBetween: 12,
		speed: 1500, // càng lớn càng chậm
		loop: true,

		autoplay: {
			delay: 4500, // chạy liên tục
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".about-7 .btn-next",
			prevEl: ".about-7 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		},
	});
}

function swiperProductRelated() {
	const swiperPartner = new Swiper(".product-detail-2 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 2,
		spaceBetween: 12,
		speed: 1500, // càng lớn càng chậm
		loop: true,

		autoplay: {
			delay: 4500, // chạy liên tục
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".product-detail-2 .btn-next",
			prevEl: ".product-detail-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}

function swiperService() {
	const swiperPartner = new Swiper(".service-detail .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 12,
		speed: 1500, // càng lớn càng chậm
		loop: true,

		autoplay: {
			delay: 4500, // chạy liên tục
			disableOnInteraction: false,
		},
	});
}

function swiperServiceOther() {
	const swiperPartner = new Swiper(".service-detail-2 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 12,
		speed: 1500, // càng lớn càng chậm
		loop: true,

		autoplay: {
			delay: 4500, // chạy liên tục
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".service-detail-2 .btn-next",
			prevEl: ".service-detail-2 .btn-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
		},
	});
}

function swiperNewsOther() {
	const swiper = new Swiper(".news-detail-3 .swiper", {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 16,
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 4500,
		},
		navigation: {
			nextEl: ".news-detail-3 .btn-next",
			prevEl: ".news-detail-3 .btn-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1920: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
}
