const currentImg = document.querySelector('.current-img');
const imgs = document.querySelectorAll('.all-imgs');

imgs.forEach(img => {
    img.addEventListener('click', e => {
        currentImg.src = e.target.src;
        currentImg.classList.add("animate-imgs");
        setTimeout(() => {
            currentImg.classList.remove("animate-imgs")
        }, 400);
    });
})