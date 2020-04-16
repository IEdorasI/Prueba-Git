const hamburguerContainer = document.querySelector('.hamburguer-container');
let menuOpen = false;
hamburguerContainer.addEventListener('click', () => {
    if (!menuOpen) {
        hamburguerContainer.classList.add('open');
        menuOpen = true;
    } else {
        hamburguerContainer.classList.remove('open');
        menuOpen = false;
    }
});