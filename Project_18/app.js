const rangeCharacter = document.getElementById("ranger-char");
const numberCharacters = document.getElementById("number-char");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");
const passwordDisplay = document.querySelector("#password-display");

const lowcaseCharCodes = arrayLowToHigh(97, 122);
const numCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
    .concat(58, 64)
    .concat(91, 96)
    .concat(123, 126);
const uppercaseCharCodes = arrayLowToHigh(65, 90);

// Synchronizing Range and Number Inputs
rangeCharacter.addEventListener("input", syncCharAmout);
numberCharacters.addEventListener("input", syncCharAmout);

function syncCharAmout(e) {
    const valueAmount = e.target.value;
    rangeCharacter.value = valueAmount;
    numberCharacters.value = valueAmount;
}

// Generating the password when the form submitted
formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = numberCharacters.value;
    const includeUppercase = uppercaseEl.checked;
    const includeNumbers = numbersEl.checked;
    const includeSymbols = symbolsEl.checked;

    const password = generatePassword(
        characterAmount,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    passwordDisplay.innerText = password;
});

function generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols) {
    // console.log(lowcaseCharCodes);
    let charCodes = lowcaseCharCodes;
    if (includeNumbers) charCodes = charCodes.concat(numCharCodes);
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);

    const passwordCharacters = []
    for (let h = 0; h < characterAmount; h++) {
        let characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCodes))
    }
    return passwordCharacters.join("");
};
//Character Codes Looping Function
function arrayLowToHigh(low, high) {
    array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
