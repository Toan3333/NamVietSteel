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
	watchObserveInputFile();
	toggleCheckbox();
	initReadMoreToggle();
	loadMoreJobs();
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

function watchObserveInputFile() {
	$('input[name="file-cv"]').on("change", function () {
		const file = this.files[0];
		if (file) {
			const fileName = file.name;
			const fileNameDisplay = $("<span>", {
				class: "file-name text-sm text-body-text-66 mt-1 block",
				text: "File CV: " + fileName,
			});

			$(this).closest(".form-input-file").find(".file-name").remove();

			$(this).closest(".form-input-file").append(fileNameDisplay);
		}
	});
}

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

function loadMoreJobs() {
	const btnMore = document.querySelector(".more");
	if (!btnMore) return;

	const hiddenRows = document.querySelectorAll("tr.hidden");
	let index = 0;
	const showCount = 4;

	function handleLoadMore(event) {
		event.preventDefault();

		for (let i = index; i < index + showCount && i < hiddenRows.length; i++) {
			hiddenRows[i].classList.remove("hidden");
		}
		index += showCount;

		btnMore.style.display = index < hiddenRows.length ? "flex" : "none";
	}

	btnMore.addEventListener("click", handleLoadMore);

	btnMore.style.display = hiddenRows.length > 0 ? "flex" : "none";
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
