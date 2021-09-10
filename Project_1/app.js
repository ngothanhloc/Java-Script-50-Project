const showBtn = document.querySelector('.open');
const modalContainer = document.querySelector(".modal-container")
const closeBtn = document.querySelector('.modal-btn')

showBtn.addEventListener('click', () => {
    modalContainer.classList.add("show");
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove("show");
})