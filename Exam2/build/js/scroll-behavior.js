window.addEventListener('scroll', scroll);

function scroll() {
    const HEADER_MENU = document.querySelector('.header__navigation');
    const ABOUT_US = document.querySelector('.what-we-do');
    const NEWS = document.querySelector('.news');
    const PROJECT = document.querySelector('.gallery');
    const CONTACTS = document.querySelector('.map');
    const DECOR_CIRCLE = document.querySelectorAll('.header__decor-circle');

    if (!HEADER_MENU || !ABOUT_US || !NEWS || !CONTACTS || !DECOR_CIRCLE || !PROJECT) {
        return null;
    }
    if (window.scrollY > 200) {
        HEADER_MENU.classList.add('header__navigation_scroll');
    }
    if (window.scrollY < 200) {
        HEADER_MENU.classList.remove('header__navigation_scroll');
    }

    addActive(visible(ABOUT_US), DECOR_CIRCLE[0]);
    addActive(visible(NEWS), DECOR_CIRCLE[2]);
    addActive(visible(PROJECT), DECOR_CIRCLE[1]);
    addActive(visible(CONTACTS), DECOR_CIRCLE[3]);
}

function visible(el, offset = -200) {
    if (!el) return false;

    const boundsTop = el.getBoundingClientRect().top + offset;
    const boundsBottom = el.getBoundingClientRect().bottom + offset;

     return  (boundsTop < 0 && boundsBottom > 0)

}

function addActive(section, decorItem) {
    if (section) {
        decorItem.classList.add('header__decor-circle_active');
    } else {
        decorItem.classList.remove('header__decor-circle_active');
    }
}
