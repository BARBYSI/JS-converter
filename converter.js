const api = "https://api.exchangerate-api.com/v4/latest/USD";

let firstCurr = document.querySelector(".first_currency_select");
let secondCurr = document.querySelector(".second_currency_select");
let currInput = document.querySelector(".currency_input");
let currOutput = document.querySelector(".currency_output");
let convertBtn = document.querySelector(".convert");
let resultFrom = document.querySelector(".first_currency_select").value;
let resultTo = document.querySelector(".second_currency_select").value;
let searchValue;

function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

function updateValue(e) {
  searchValue = e.target.value;
}

function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  currOutput.value = ((toRate / fromRate) * searchValue).toFixed(2);
}

currInput.addEventListener("input", updateValue);

firstCurr.addEventListener("change", (event) => {
  resultFrom = event.target.value;
});

secondCurr.addEventListener("change", (event) => {
  resultTo = event.target.value;
});

convertBtn.addEventListener("click", getResults);
