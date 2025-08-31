/* Header Menu */
  
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});






//Radio Btn//
    function updateTextColor() {
        const firstLabel = document.getElementById('label1');
        const secondLabel = document.getElementById('label2');
        
        if (document.getElementById('radio1').checked) {
            firstLabel.className = 'text-[#07081E] font-Inter font-medium text-lg leading-8';
            secondLabel.className = 'text-[#7C7C82] font-Inter font-medium text-lg leading-8';
        } else {
            firstLabel.className = 'text-[#7C7C82] font-Inter font-medium text-lg leading-8';
            secondLabel.className = 'text-[#07081E] font-Inter font-medium text-lg leading-8';
        }
    }



    
    




  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.unique', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop:true,
        Infinity: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '#slider-previous-unique',
            prevEl: '#slider-next-unique',
        },
        pagination: {
            el: '.pagination',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.uniques', {
        slidesPerView: 1,
        spaceBetween: 18,
        loop:true,
        Infinity: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        
        pagination: {
            el: '.paginations',
            clickable: true,
          },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 18,
            },
            640: {
                slidesPerView: 1.1,
                spaceBetween: 18,
            },
            
        },
    });
  });