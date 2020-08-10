function openMenu() {
    const NAVIGATION = document.querySelector('.header__navigation');
    const MENU = document.querySelector('.header__menu');
    const BURGER_MENU = document.querySelector('.header__burger-menu');
    const BURGER_OPEN = document.querySelector('.header__menu_open');
    const BURGER_CLOSE = document.querySelector('.header__menu_close');

    if (!NAVIGATION || !MENU || !BURGER_MENU || !BURGER_OPEN || !BURGER_CLOSE) return null;

    BURGER_MENU.addEventListener('click', () => {
        MENU.classList.toggle('header__mob-menu');
        BURGER_MENU.classList.toggle('header__burger-menu_opened');
        BURGER_OPEN.classList.toggle('header__menu_hidden');
        BURGER_CLOSE.classList.toggle('header__menu_hidden');
    });
}

function scroll() {
    window.addEventListener('scroll', scroll);

    const NAVIGATION = document.querySelector('.header__navigation');
    if (!NAVIGATION) return null;

    if (window.scrollY > 200) {
        NAVIGATION.classList.add('header__navigation_scroll');
    }
    if (window.scrollY < 200) {
        NAVIGATION.classList.remove('header__navigation_scroll');
    }
}

scroll();
openMenu();