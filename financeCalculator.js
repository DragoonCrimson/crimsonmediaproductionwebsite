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
fontForm.addEventListener("submit", function (event) {
  changeFont();
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
    case "white":
      color = "white";
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
  if(response === "black") {
    document.getElementById("header").style.color = "white";
  } else {
    document.getElementById("header").style.color = "black";
  }
  event.preventDefault();
}
function changeFont(){
  const chosenFont = texts.options[texts.selectedIndex].value;
  let font = "san serif";
  switch (chosenFont) {
    case "cursive":
      font = "cursive";
      break;
    case "monospace":
      font = "monospace";
      break;  
    case "san serif":
      font = "san serif";
      break;
      default:
      font = "san serif";
  }
  document.getElementById("font").style.fontFamily = font;
  event.preventDefault();
}

const apiKey = "AIzaSyDnGjWOB4G6T1vwvgPj67e60Ilpe_zR818";

const searchButton = document.getElementById("searchButton");

const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search";
const resultsDiv = document.getElementById("results")

searchButton.addEventListener("click", (e) => {
  
  const searchTerm = document.getElementById("searchQuery").value;
  const apiPrefix = "&key=";
  const searchQuery = "?part=snippet&q=" + searchTerm + apiPrefix + apiKey;
  const url= googleAPIUrl + searchQuery;
  
  fetch(url)
  .then(response => response.json())
  .then((results) => {
    results.items.forEach(item => { 

      if (item.id.videoId != undefined) {
      const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
      console.log(link)

        resultsDiv.innerHTML += "<br /><br />";
        resultsDiv.innerHTML += `<a href="${link}">${item.snippet.title}</a>`;
        resultsDiv.innerHTML += "<br /><br />";
        resultsDiv.innerHTML += `<img src="${item.snippet.thumbnails.default.url}"/>`;

      }
    })
  })

});

