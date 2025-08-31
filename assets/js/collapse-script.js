document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiperss', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop:true,
        Infinity: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
  });





  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swipersss', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop:true,
        Infinity: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-paginations',
            clickable: true,
          },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
  });