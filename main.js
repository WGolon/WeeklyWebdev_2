const header = document.querySelector('.header-container');
const section = [...document.querySelectorAll('.section')];
const sections = {};
const scrollNodesArr = [...document.querySelectorAll('.navbar__element > a')]
const scrollImg = document.querySelector('.fresh-life__scroll__img');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar__mobile');
const mobileNavElements = nav.querySelectorAll('a');


//mobile nav
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navbar__mobile--active');
})

mobileNavElements.forEach(el => {
    el.addEventListener('click', () => {
        console.log('asd')
        nav.classList.remove('navbar__mobile--active');
        hamburger.classList.remove('hamburger--active')
    })
})
//

scrollImg.addEventListener('click', () => {
    const targetPosition = document.querySelector('.about-section').offsetTop
    window.scrollTo( {
        top: targetPosition -35,
        behaviour: 'smooth',
    })
})


section.forEach((el) => {
    sections[el.classList[0]] = el.offsetTop;
})

scrollNodesArr.forEach(el => {
    el.addEventListener('click', () => {
        const targetPosition = document.querySelector(`section.${el.classList[0]}`).offsetTop;
         window.scrollTo({
             top: targetPosition-35,
             behaviour: 'smooth',
         });
    })
})



window.onscroll = function() {
    stickyNav();
    scrollSpy();
}

let stickyNav = () => {
    window.pageYOffset >= 1 ? header.classList.add("sticky"): header.classList.remove('sticky');
}

let scrollSpy = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for(let key in sections) {
        if(sections[key] -100 <= scrollPosition) {

            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a.${key}`).classList.add('active');

            nav.querySelector('.active').classList.remove('active');
            nav.querySelector(`a.${key}`).classList.add('active');
        }
    }
}

let scrollToSection = () => {

}
