const key = "7e407311d01449e66c885b3a";

let currencyEle_1 = document.querySelector("#currency-1");
let currencyEle_2 = document.querySelector("#currency-2");
let amountEle_1 = document.querySelector("#amount-1");
let amountEle_2 = document.querySelector("#amount-2");

let rateEle = document.querySelector("#rate");
let swap = document.querySelector("#button");

//event
currencyEle_1.addEventListener("change", exChange);
amountEle_1.addEventListener("input", exChange);
currencyEle_2.addEventListener("change", exChange);
amountEle_2.addEventListener("input", exChange);
swap.addEventListener("click", () => {
  let temp = currencyEle_1.value;
  currencyEle_1.value = currencyEle_2.value;
  currencyEle_2.value = temp;
  exChange();
});

//Change currency
function exChange() {
  let currency_1 = currencyEle_1.value;
  let currency_2 = currencyEle_2.value;
  //   console.log(currency_1, amountEle_1.value);
  fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency_1}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   console.log(data);
      const rate = data.conversion_rates[currency_2];
      rateEle.innerText = `1 ${currency_1} = ${rate} ${currencyEle_2.value}`;
      amountEle_2.value = (amountEle_1.value * rate).toFixed(2);
    });
}
exChange();
