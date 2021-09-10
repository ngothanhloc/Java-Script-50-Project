const toggleBtn = document.querySelector('.toggle-btn');
const mainHeader = document.querySelector('.main-header');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    overlay.classList.toggle('open');
    mainHeader.classList.toggle('open');
})