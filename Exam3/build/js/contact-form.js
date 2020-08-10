function closeForm(){
    const CLOSE_BTN = document.querySelector('.map__get-in-touch-close');
    const FORM_BG = document.querySelector('.map__get-in-touch-bg');
    if(!CLOSE_BTN || !FORM_BG) return null;

    CLOSE_BTN.addEventListener('click', ()=>{
        FORM_BG.style.display = 'none';
    });
}

closeForm();