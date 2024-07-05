// const apiKey = 'cur_live_uEdSI4oZeWWqbp9E8yi5opLS1i6QrwV9dx5zYOxC';
// const apiUrl = 'https://api.currencyapi.com/v3/latest';

// const amountInput = document.querySelector('input');
// const fromSelect = document.querySelector('select[name="from"]');
// const toSelect = document.querySelector('select[name="to"]');
// const msgDiv = document.querySelector('.msg');
// const fromFlag = document.getElementById('from-flag');
// const toFlag = document.getElementById('to-flag');

// async function fetchExchangeRate(fromCurrency, toCurrency) {
//     const response = await fetch(`${apiUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
//     const data = await response.json();
//     return data.data[toCurrency].value;
// }

// function updateExchangeRateMessage(fromCurrency, toCurrency, rate) {
//     msgDiv.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
// }

// function updateFlags(fromCurrency, toCurrency) {
//     fromFlag.src = `https://flagsapi.com/${countryList[fromCurrency]}/flat/64.png`;
//     toFlag.src = `https://flagsapi.com/${countryList[toCurrency]}/flat/64.png`;
// }

// document.querySelector('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const amount = parseFloat(amountInput.value);
//     const fromCurrency = fromSelect.value;
//     const toCurrency = toSelect.value;
//     if (isNaN(amount) || amount <= 0) {
//         msgDiv.textContent = 'Please enter a valid amount';
//         return;
//     }

//     const rate = await fetchExchangeRate(fromCurrency, toCurrency);
//     if (rate) {
//         const convertedAmount = (amount * rate).toFixed(2);
//         updateExchangeRateMessage(fromCurrency, toCurrency, rate);
//         msgDiv.textContent += ` | ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//         updateFlags(fromCurrency, toCurrency);
//     } else {
//         msgDiv.textContent = 'Error fetching exchange rate';
//     }
// });

// fromSelect.addEventListener('change', () => {
//     updateFlags(fromSelect.value, toSelect.value);
// });

// toSelect.addEventListener('change', () => {
//     updateFlags(fromSelect.value, toSelect.value);
// });

// // Initialize flags on page load
// updateFlags(fromSelect.value, toSelect.value);
// const apiKey = 'cur_live_uEdSI4oZeWWqbp9E8yi5opLS1i6QrwV9dx5zYOxC';
// const apiUrl = 'https://api.currencyapi.com/v3/latest';

// const amountInput = document.querySelector('#amount');
// const fromSelect = document.querySelector('#from-currency');
// const toSelect = document.querySelector('#to-currency');
// const msgDiv = document.querySelector('.msg');
// const fromFlag = document.getElementById('from-flag');
// const toFlag = document.getElementById('to-flag');

// function populateSelectElement(selectElement) {
//     for (const currencyCode in countryList) {
//         const option = document.createElement('option');
//         option.value = currencyCode;
//         option.textContent = currencyCode;
//         selectElement.appendChild(option);
//     }
// }

// populateSelectElement(fromSelect);
// populateSelectElement(toSelect);

// async function fetchExchangeRate(fromCurrency, toCurrency) {
//     const response = await fetch(`${apiUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
//     const data = await response.json();
//     return data.data[toCurrency].value;
// }

// function updateExchangeRateMessage(fromCurrency, toCurrency, rate) {
//     msgDiv.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
// }

// function updateFlags(fromCurrency, toCurrency) {
//     fromFlag.src = `https://flagsapi.com/${countryList[fromCurrency]}/flat/64.png`;
//     toFlag.src = `https://flagsapi.com/${countryList[toCurrency]}/flat/64.png`;
// }

// document.querySelector('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const amount = parseFloat(amountInput.value);
//     const fromCurrency = fromSelect.value;
//     const toCurrency = toSelect.value;
//     if (isNaN(amount) || amount <= 0) {
//         msgDiv.textContent = 'Please enter a valid amount';
//         return;
//     }

//     const rate = await fetchExchangeRate(fromCurrency, toCurrency);
//     if (rate) {
//         const convertedAmount = (amount * rate).toFixed(2);
//         updateExchangeRateMessage(fromCurrency, toCurrency, rate);
//         msgDiv.textContent += ` | ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//         updateFlags(fromCurrency, toCurrency);
//     } else {
//         msgDiv.textContent = 'Error fetching exchange rate';
//     }
// });

// fromSelect.addEventListener('change', () => {
//     updateFlags(fromSelect.value, toSelect.value);
// });

// toSelect.addEventListener('change', () => {
//     updateFlags(fromSelect.value, toSelect.value);
// });

// // Initialize flags on page load
// updateFlags(fromSelect.value, toSelect.value);
const apiKey = 'cur_live_uEdSI4oZeWWqbp9E8yi5opLS1i6QrwV9dx5zYOxC';
const apiUrl = 'https://api.currencyapi.com/v3/latest';

const amountInput = document.querySelector('#amount');
const fromSelect = document.querySelector('#from-currency');
const toSelect = document.querySelector('#to-currency');
const msgDiv = document.querySelector('.msg');
const fromFlag = document.getElementById('from-flag');
const toFlag = document.getElementById('to-flag');

function populateSelectElement(selectElement, defaultCurrency) {
    for (const currencyCode in countryList) {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyCode;
        if (currencyCode === defaultCurrency) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    }
}

populateSelectElement(fromSelect, 'USD');
populateSelectElement(toSelect, 'INR');

async function fetchExchangeRate(fromCurrency, toCurrency) {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
    const data = await response.json();
    return data.data[toCurrency].value;
}

function updateExchangeRateMessage(fromCurrency, toCurrency, rate) {
    msgDiv.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
}

function updateFlags(fromCurrency, toCurrency) {
    fromFlag.src = `https://flagsapi.com/${countryList[fromCurrency]}/flat/64.png`;
    toFlag.src = `https://flagsapi.com/${countryList[toCurrency]}/flat/64.png`;
}

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    if (isNaN(amount) || amount <= 0) {
        msgDiv.textContent = 'Please enter a valid amount';
        return;
    }

    const rate = await fetchExchangeRate(fromCurrency, toCurrency);
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        updateExchangeRateMessage(fromCurrency, toCurrency, rate);
        msgDiv.textContent += ` | ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        updateFlags(fromCurrency, toCurrency);
    } else {
        msgDiv.textContent = 'Error fetching exchange rate';
    }
});

fromSelect.addEventListener('change', () => {
    updateFlags(fromSelect.value, toSelect.value);
});

toSelect.addEventListener('change', () => {
    updateFlags(fromSelect.value, toSelect.value);
});

// Initialize flags on page load
updateFlags(fromSelect.value, toSelect.value);


