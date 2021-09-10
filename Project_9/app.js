const checkBox = document.querySelector('input[name=theme]');
let htmlElement = document.documentElement;

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        htmlElement.classList.toggle('transition');
        htmlElement.setAttribute('data-theme', "dark")
    } else {
        htmlElement.classList.toggle("transition");
        htmlElement.setAttribute('data-theme', "light")
    }
})
