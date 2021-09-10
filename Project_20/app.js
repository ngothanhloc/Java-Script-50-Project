const textDisplay = document.querySelector('#text');
const speedBtn = document.querySelector('#speed');
const readBtn = document.querySelector('.read');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
let currentChar;
// Reading functionality
readBtn.addEventListener('click', () => {
    readText(textDisplay.value);
})

// Pausing Functionnality
pauseBtn.addEventListener('click', pauseText);

//Stopping Functionality
stopBtn.addEventListener('click', stopText)

// Speed Input Funxtionaliy
speedBtn.addEventListener('input', () => {
    stopText();
    readText(utterance.text.substring(currentChar));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener('end', () => {
    textDisplay.disabled = false;
});

utterance.addEventListener('boundary', e => {
    currentChar = e.charIndex;
})
// ReadText Function
function readText(testText) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }

    if (speechSynthesis.speaking) return;

    utterance.text = testText;
    utterance.rate = speedBtn.value || 1;
    textDisplay.disabled = true;
    speechSynthesis.speak(utterance);
}

// pauseText Function
function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause();
}

// stopText Function
function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
}