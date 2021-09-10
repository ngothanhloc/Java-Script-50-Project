const silder = document.querySelector('.container');
let isDown = false;
let startx;
let scrollToLeft;

silder.addEventListener('mousedown', e => {
    isDown = true;
    silder.classList.add('active');

    startx = e.pageX - silder.offsetLeft;
    scrollToLeft = silder.scrollLeft;
    console.log(scrollToLeft)
});

silder.addEventListener('mouseup', () => {
    isDown = false;
    silder.classList.remove('active');
});


silder.addEventListener('mouseleave', () => {
    isDown = false;
    silder.classList.remove('active');
});

silder.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();

    const distanceX = e.pageX - silder.offsetLeft;
    const walk = distanceX - startx;
    silder.scrollLeft = scrollToLeft - walk;
});