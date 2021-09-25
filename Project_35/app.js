const fromCurrencyInput = document.querySelector(".from-currency");
const toCurrencyInput = document.querySelector(".to-currency");
const exchangeAmountInput = document.querySelector(".amount");
const getRateBtn = document.querySelector(".get-rate");

getRateBtn.addEventListener('click', e => {
    e.preventDefault();
    const formCurrencyValue = fromCurrencyInput.value;
    const toCurrencyValue = toCurrencyInput.value;
    const exchangeAmountValue = exchangeAmountInput.value;

    if (formCurrencyValue === "" || toCurrencyValue == "" || exchangeAmountValue === "") {
        inputError();
    } else {
        convertCurrency(formCurrencyValue, toCurrencyValue, exchangeAmountValue)
            .then(exChangeResult => {
                document.querySelector('.currency-item').innerText = exChangeResult;

                setTimeout(() => {
                    location.reload()
                }, 6000)
            }).catch(() => invalidCode());;
    }
})
// ------------------------------------------------------------------------------------------------------------------------------
async function getExchangeRate(formCurrency, toCurrency) {
    const response = await fetch('http://data.fixer.io/api/latest?access_key=0560c140f8afbd8c39056138ee216228&format=1');

    const currencyData = await response.json();
    const currencyRates = currencyData.rates;
    const baseCurrency = 1 / currencyRates[formCurrency];
    const exchangeRate = baseCurrency * currencyRates[toCurrency];

    if (isNaN(exchangeRate)) {
        throw new Error(invalidCode());
    }

    return exchangeRate;
}

// getExchangeRate('VND', 'USD').then(result => console.log(result));

// ------------------------------------------------------------------------------------------------------------------------------

async function convertCurrency(formCurrency, toCurrency, exChangeAmount) {
    const amountExchangeRate = await getExchangeRate(formCurrency, toCurrency);
    const convertedAmount = (exChangeAmount * amountExchangeRate).toFixed(2);

    return `${exChangeAmount} ${formCurrency} =====> ${convertedAmount} ${toCurrency}`;
}

// convertCurrency('USD', 'VND', 100).then(result => console.log(result))

// ------------------------------------------------------------------------------------------------------------------------------
function inputError() {
    document.querySelector('.input-error').classList.add('show')
    setTimeout(() => {
        document.querySelector('.input-error').classList.remove('show')
    }, 1500);
}

function invalidCode() {
    document.querySelector('.invalid-code').classList.add('show')
    setTimeout(() => {
        document.querySelector('.invalid-code').classList.remove('show')
    }, 1500);
}