const exchangeRates = {
    EUR: 4.1913,
    GBP: 5.0276,
    CHF: 4.4003,
    SEK: 0.3872,
    NOK: 0.3691,
    DKK: 0.5620,
    HUF: 0.010455, 
    CZK: 0.1681,
    RON: 0.8422,
    BGN: 2.1445
};

function convertPLN() {
    const amount = parseFloat(document.getElementById("plnAmount").value);
    const currency = document.getElementById("currencySelect").value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("plnResult").innerText = "Podaj poprawną kwotę w PLN.";
        return;
    }
    
    const convertedAmount = (amount / exchangeRates[currency]).toFixed(2);
    document.getElementById("plnResult").innerText = `${amount} PLN = ${convertedAmount} ${currency}`;
}

function convertToPLN() {
    const amount = parseFloat(document.getElementById("currencyAmount").value);
    const currency = document.getElementById("plnSelect").value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("currencyResult").innerText = "Podaj poprawną kwotę w wybranej walucie.";
        return;
    }
    
    const convertedAmount = (amount * exchangeRates[currency]).toFixed(2);
    document.getElementById("currencyResult").innerText = `${amount} ${currency} = ${convertedAmount} PLN`;
}