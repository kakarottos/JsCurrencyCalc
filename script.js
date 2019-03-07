var rates = [ 0.29, 3.45, 0.24, 4.15, 1.20, 0.83 ];
var PLNUSD = rates[0];
var USDPLN = rates[1];
var PLNEUR = rates[2];
var EURPLN = rates[3];
var USDEUR = rates[4];
var EURUSD = rates[5];
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  if(from === 'PLN' && to === 'USD') {
    result = amount * PLNUSD;
  } else if (from === 'USD' && to === 'PLN') {
    result = amount * USDPLN;
  } else if (from === 'PLN' && to === 'EUR') {
    result = amount * PLNEUR;
  } else if (from === 'EUR' && to === 'PLN') {
    result = amount * EURPLN;
  } else if (from === 'USD' && to === 'EUR') {
    result = amount * USDEUR;
  } else if (from === 'EUR' && to === 'USD') {
    result = amount * EURUSD;
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);

