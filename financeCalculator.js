function calculations() {

  const gross = document.getElementById("grossIncome").value;
  const net = document.getElementById("netIncome").value;
  const Gross = parseFloat(gross);
  const Net = parseFloat(net);
  const total = (Gross - Net);
  const difference = parseFloat(total.toFixed(2));
  const percentageAmount = difference / Net;
  const percentagePaid = percentageAmount * 100;
  console.log(percentagePaid.toFixed(2) + "%");
  response.innerText = "You have paid: " + (percentagePaid.toFixed(2) + "%") + " tax on your income";
  secondResponse.innerText = "This is the monetary equivalent to: " + difference;

}
const grossIncomeForm = document.getElementById("grossIncomeForm");

grossIncomeForm.addEventListener("submit", function (event) {
  calculations();
});
const netIncomeForm = document.getElementById("netIncomeForm");

netIncomeForm.addEventListener("submit", function (event) {
  calculations();
});
