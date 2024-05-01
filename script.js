document.querySelector('#login').onclick = function () {
    document.querySelector('.login-form').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = function () {
    document.querySelector('.login-form').classList.remove('active');
}

document.querySelector('.add-listing').onclick = function () {
    document.querySelector('.add-listing-form').classList.toggle('active');
}
document.querySelector('#close-add-listing-form').onclick = function () {
    document.querySelector('.add-listing-form').classList.remove('active');
}
document.querySelectorAll('.price button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.checkout-form').classList.add('active');
    });
});

document.querySelector('#close-checkout-form').onclick = function () {
    document.querySelector('.checkout-form').classList.remove('active');
};


window.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.opacity = 0;
    fadeIn(welcomeMessage, 0);
});

function fadeIn(element, opacity) {
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 100);
}
var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  
  const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);