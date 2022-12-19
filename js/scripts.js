let zlotyElement = document.querySelector(".js-zloty");
let currencyElement = document.querySelector(".js-form__currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (even) => {
  event.preventDefault();

  let EUR = 4.68;
  let USD = 4.42;
  let GBP = 5.37;
  let CHF = 4.75;

  let zloty = +zlotyElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "EUR":
      result = zloty / EUR;
      break;

    case "USD":
      result = zloty / USD;
      break;

    case "GBP":
      result = zloty / GBP;
      break;

    case "CHF":
      result = zloty / CHF;
  }

  resultElement.innerHTML = `${zloty} PLN = ${result.toFixed(2)} ${currency}`;
});
