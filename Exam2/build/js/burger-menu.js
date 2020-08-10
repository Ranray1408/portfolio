function openCloseMenu() {
    const BURGER = document.querySelector('.header__burger-menu');
    const BURGER_OPEN = document.querySelector('.header__burger-menu_open');
    const BURGER_CLOSE = document.querySelector('.header__burger-menu_close');
    const NAVIGATION = document.querySelector('.header__navigation');
    const MENU = document.querySelector('.header__menu');
    const MENU_ITEMS = document.querySelectorAll('.header__menu-item');
    const SOCIAL_LIST = document.querySelector('.social-list');
    if (!BURGER || !BURGER_OPEN || !BURGER_CLOSE || !NAVIGATION || !MENU || !MENU_ITEMS || !SOCIAL_LIST) return null;

    BURGER.addEventListener('click', () => {
        BURGER_OPEN.classList.toggle('header__burger_hidden');
        BURGER_CLOSE.classList.toggle('header__burger_hidden');

        NAVIGATION.classList.toggle('header__navigation');
        NAVIGATION.classList.toggle('header__mob-navigation');

        MENU.classList.toggle('header__mob-menu');
        MENU_ITEMS.forEach((el)=>{
            el.classList.toggle('header__mob-item');
        });
        SOCIAL_LIST.classList.toggle('header__mob-social-list');
        BURGER.classList.toggle('header__burger_active');
    });
}

openCloseMenu();