

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btnnn');
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) =>  {
        slide.classList.remove('active');

        btns.forEach((btnnn) => {
            btnnn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btnnn, i) => {
    btnnn.addEventListener("click", () => {
        manualNav(i);
        currentSlide=i;
    });
});




var repeat = function(activeClass) {
    let active = document.getElementsByName('active');
    let i = 1;

    var repeat = () => {
        setTimeout(function() {
            

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++; 

            if(slides.length == i) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeat();
        },10000);
    }
    repeat();
}
repeat();

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        },

    }
  });