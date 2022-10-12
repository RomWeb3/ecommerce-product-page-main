//menu

const menu = document.querySelector('nav');
const menuBtn = document.getElementById('menu-btn');
const menuBtnClose = document.getElementById('menu-btn-close');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});

menuBtnClose.addEventListener('click', () => {
    menu.style.display = 'none';
});

//Carrousel

const buttons = document.querySelectorAll('[data-carousel-button]');


buttons.forEach(button => {
    button.addEventListener("click", () => {
        
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1
            const slides = button
                .closest('[data-carousel]').querySelector('[data-slides]')
      
            const activeSlide = slides.querySelector('[data-active]')
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
    })
});

// cart

const cart = document.getElementById('cart');
const cartModal = document.querySelector('[data-cart]');
const counter = document.getElementById('counter');
const cardCounter = document.getElementById('card-counter');
const totalPrice = document.getElementById('total-price');
const deleteCard = document.getElementById('delete-card');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const addCartBtn = document.getElementById('add-cart-btn');
const cartCount = document.getElementById('cart-count');
let count = 0;


cart.addEventListener('click', () => {
    if (counter.innerText = '0') {
        cartModal.classList.toggle('active');
    }
    if (count > 0 ) {
        cartModal.classList.toggle('active-cart');
        cartModal.classList.remove('active');
    }
});



minus.addEventListener('click', () => {
    if (count === 0) {
        return
    }
    count--;
    counter.innerText = count;
});

plus.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

addCartBtn.addEventListener('click', () => {
    if (count > 0) {
    cartModal.classList.add('active-cart');
    cartCount.classList.add('active');
    cartCount.innerText = count;
    cardCounter.innerText = count;
    if (cardCounter === '0') {
        totalPrice.innerText = '0';
    }
    totalPrice.innerText = (125.00 * count).toFixed(2);
}
});

deleteCard.addEventListener('click', () => {
    count = 0;
    counter.innerText = 0;
    cardCounter.innerText = 0;
    totalPrice.innerText = '0';
    cartCount.innerText = 0;
    cartModal.classList.remove('active-cart');
    cartCount.classList.remove('active');
});














