import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	buttonToTop();
	toggleCheckbox();
	initReadMoreToggle();
	// countUpInit();

	const $items = $(".home-5-list .item");

	// Gán active mặc định cho item đầu tiên và content bên trong
	$items.first().addClass("active").find(".content").addClass("active");

	// Hover để đổi active
	$items.on("mouseenter", function () {
		$items.removeClass("active");
		$items.find(".content").removeClass("active");

		$(this).addClass("active");
		$(this).find(".content").addClass("active");
	});

	$(".product-item-heading").on("click", function () {
		$(this).next(".product-main").slideToggle();
		$(this).find(".icon-left i").toggleClass("fa-chevron-down fa-chevron-up");
	});

	$('.product-item li[class*="has-children"] > ul').hide();

	$('.product-item li[class*="has-children"] > a').on("click", function (e) {
		e.preventDefault();

		$(this)
			.toggleClass("dropdown-active")
			.next()
			.slideToggle()
			.parent()
			.siblings()
			.find("a")
			.removeClass("dropdown-active")
			.next()
			.slideUp();
	});
});

export function toggleCheckbox() {
	document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
		// Đảm bảo checkbox không có class "checked" khi mới load
		checkbox.classList.remove("checked");

		// Thêm sự kiện click để toggle class "checked"
		checkbox.addEventListener("click", function () {
			this.classList.toggle("checked");
		});
	});
}

function initReadMoreToggle() {
	const $readMoreBtn = $(".button-read-more a");
	const $hiddenContent = $(".hidden-content");

	if ($readMoreBtn.length && $hiddenContent.length) {
		$readMoreBtn.on("click", function (e) {
			e.preventDefault();

			const $span = $(this).find("span");
			const $icon = $(this).find("i");

			$hiddenContent.toggleClass("active");

			if ($hiddenContent.hasClass("active")) {
				$span.text("Thu gọn");
				$icon.removeClass("fa-angle-down").addClass("fa-angle-up");
			} else {
				$span.text("Xem thêm");
				$icon.removeClass("fa-angle-up").addClass("fa-angle-down");
			}
		});
	}
}

// export function indicatorSlide() {
// 	if ($(".indicator-swipe").length > 0) {
// 		var callback = function (entries) {
// 			entries.forEach(function (entry) {
// 				if (entry.isIntersecting) {
// 					entry.target.classList.add("active");
// 					setTimeout(function () {
// 						entry.target.classList.remove("active");
// 					}, 3000);
// 				}
// 			});
// 		};

// 		var observer = new IntersectionObserver(callback);
// 		var animationItems = document.querySelectorAll(".indicator-swipe");
// 		animationItems.forEach(function (item) {
// 			observer.observe(item);
// 		});
// 	}
// }

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
