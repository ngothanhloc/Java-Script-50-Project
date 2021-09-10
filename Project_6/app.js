const body = document.body;
const switchBnt = document.querySelector('.switch');
const switchPara = document.querySelector('.color');

switchBnt.addEventListener('click', () => {
    let color1 = getRandomNum();
    let color2 = getRandomNum();
    let color3 = getRandomNum();

    const colorString = `rgb(${color1}, ${color2}, ${color3})`;
    console.log(colorString);

    body.style.backgroundColor = colorString;
    switchPara.innerText = colorString;
});

function getRandomNum() {
    return Math.floor(Math.random() * 256);
}