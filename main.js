const header = document.querySelector('.header');


window.onscroll = function() {
    stickyNav();
}

let stickyNav = () => {
    window.pageYOffset >= 1 ? header.classList.add("sticky"): header.classList.remove('sticky');
}