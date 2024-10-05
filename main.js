document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card', {delay: 500});
ScrollReveal().reveal('.card-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


// scripts de steelfira9239


function scrollLeft() {
    document.getElementById('videoSection').scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('videoSection').scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
}














