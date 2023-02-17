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
  event.preventDefault();
}
const grossIncomeForm = document.getElementById("grossIncomeForm");

grossIncomeForm.addEventListener("submit", function (event) {
});
const netIncomeForm = document.getElementById("netIncomeForm");

netIncomeForm.addEventListener("submit", function (event) {
  calculations();
});

colorForm.addEventListener("submit", function (event) { 
  chosenColors();
  });
randomColorForm.addEventListener("submit", function (event) {
  randomColors();
}); 

function chosenColors() {

  const colors = document.getElementById("colors");
  const chosenColor = colors.options[colors.selectedIndex].value;
  let color = "white";
  switch (chosenColor) {

    case "red":
    color = "red";
      break;
    case "green":
    color = "green";
      break;
    case "blue":
    color = "blue";
      break;
    case "grey":
      color = "grey";
      break;
    case "black":
      color = "black";
      break;
    case "aquamarine":
      color = "aquamarine";
      break;
    default:
    color = "white";
  }
  document.getElementById("header").style.backgroundColor = color;
  if(color === "black"){
    document.getElementById("header").style.color = "white";
  } else {
    document.getElementById("header").style.color = "black";
  }
  event.preventDefault();
}
function randomColors(){
 const response = document.getElementById("randomColor").value;
  document.getElementById("header").style.backgroundColor = response;
  event.preventDefault();
}

