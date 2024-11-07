const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const productNav = document.querySelector('.product-nav');
const cardsection = document.querySelector('.card-section');

leftBtn.addEventListener('click', () => {
    productNav.scrollBy({ left: -200, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    productNav.scrollBy({ left: 200, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
    cardSection.scrollBy({ left: -200, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    cardSection.scrollBy({ left: 200, behavior: 'smooth' });
});

