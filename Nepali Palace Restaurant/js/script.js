let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active'); 
}

document.querySelector('#close').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active'); 
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            sliderPreView:1,
        }, 
        640: {
            sliderPreView:2,
        }, 
        768: {
            sliderPreView:2,
        },
         1024: {
            sliderPreView:3,
        },
        
    },
  });