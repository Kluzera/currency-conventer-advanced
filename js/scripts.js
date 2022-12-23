{
  const welcome = () => {
    console.log("Hi everyone");
  };

  welcome();

  const calculateResult = (zloty, currency) => {
    const EUR = 4.68;
    const USD = 4.42;
    const GBP = 5.37;
    const CHF = 4.75;

    switch (currency) {
      case "EUR":
        return zloty / EUR;

      case "USD":
        return zloty / USD;

      case "GBP":
        return zloty / GBP;

      case "CHF":
        return zloty / CHF;
    }
  };

  const updateTextResult = (zloty, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${zloty} PLN = ${result.toFixed(2)} ${currency}`;
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (even) => {
      event.preventDefault();

      const zlotyElement = document.querySelector(".js-zloty");
      const currencyElement = document.querySelector(".js-form__currency");
      
      const zloty = +zlotyElement.value;
      const currency = currencyElement.value;

      let result = calculateResult(zloty, currency);

      updateTextResult(zloty, result, currency);
    });
  }
    
  init();
}