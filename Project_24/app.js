const celciusInput = document.querySelector('#celcius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');
const tempInputs = document.querySelectorAll('input');
const h1 = document.querySelector(".title");

tempInputs.forEach(input => {
    input.addEventListener('input', e => {
        let tempValue = parseInt(e.target.value);
        let inputName = e.target.name;

        if (e.target.value == '') {
            celciusInput.value = null;
            fahrenheitInput.value = null;
            kelvinInput.value = null;

            return;
        }

        if (inputName === 'celcius') {
            // Celcius to Fahrenheit
            let fahrenheitValue = tempValue * 1.8 + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);

            // Celcius to Kelvin
            let kelvinValue = tempValue + 273.15;
            kelvinInput.value = kelvinValue.toFixed(2);
        } else if (inputName === 'fahrenheit') {
            // Fahrenheit to Celcius
            let celciusValue = (tempValue - 32) / 1.8
            celciusInput.value = celciusValue.toFixed(2);

            // Fahrenheit to Kelvin
            let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
            kelvinInput.value = kelvinValue.toFixed(2);

        } else if (inputName === "kelvin") {
            // Kelvin to Celcius
            let celciusValue = tempValue - 273.15;
            celciusInput.value = celciusValue.toFixed(2);

            // Kelvin to Celcius
            let fahrenheitValue = (tempValue - 273.15) * 1.8 + 273.15;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        }
    });
});

