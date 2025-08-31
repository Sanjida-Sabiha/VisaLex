// Function to load the modal content
function loadModals() {
    fetch('modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data;
        });
}

// Load modals on page load
window.onload = loadModals;

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        Infinity:true,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '#slider-previous-unique',
            prevEl: '#slider-next-unique',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
