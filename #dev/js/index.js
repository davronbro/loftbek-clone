document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 1200,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const recommendedSwiper = new Swiper(".recommended-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: ".recommended .swiper-button-next",
      prevEl: ".recommended .swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const popularSwiper = new Swiper(".popular-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".popular-products .swiper-button-next",
      prevEl: ".popular-products .swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const discountsSwiper = new Swiper(".discounts-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".discounts .swiper-button-next",
      prevEl: ".discounts .swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const offersSwiper = new Swiper(".offers-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".offers .swiper-button-next",
      prevEl: ".offers .swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const categorySwiper = new Swiper(".category-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: " .swiper-button-next",
      prevEl: " .swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      769: {
        slidesPerView: 3.5,
      },
      576: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.6,
      },
    },
  });

  const testimonialSwiper = new Swiper(".testimonials-swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".testimonials .swiper-button-next",
      prevEl: ".testimonials .swiper-button-prev",
    },
    breakpoints: {
      1150: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3.5,
      },
      715: {
        slidesPerView: 2.6,
      },
      485: {
        slidesPerView: 1.7,
      },
      320: {
        slidesPerView: 1.4,
      },
    },
  });

  const productSwiper = new Swiper(".product-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const productSwiper2 = new Swiper(".product-swiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productSwiper,
    },
  });
});
