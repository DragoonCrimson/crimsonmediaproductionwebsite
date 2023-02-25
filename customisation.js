colorForm.addEventListener("submit", function (event) { 
  chosenColors();
  });
randomColorForm.addEventListener("submit", function (event) {
  randomColors();
}); 
fontForm.addEventListener("submit", function (event) {
  changeFont();
});

//Changing background colours
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
//Random Background Colours part 2
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
// Changing font
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

//Full Customisation
function fullCustom(){
  const fontColor = document.getElementById("customFont").value;
  const customFontSize = customSize.options[customSize.selectedIndex].value;
  let Size = "12px";
  switch(customFontSize){
    case "8":
      Size = "8px";
      break;
    case "12":
      Size = "12px";
      break;
    case "24":
      Size = "24px";
      break;
    default:
      Size = "12px";
  }
  const customColour = document.getElementById("customBackground").value;
  if (customColour === "MintOMello") {
    (document.getElementById("customisation").style.backgroundColor = "#3EB489") + (document.getElementById("customisation").style.fontSize = "72px");
  } else {
  (document.getElementById("customisation").style.backgroundColor = customColour) + 
    (document.getElementById("customisation").style.color = fontColor) + (document.getElementById("customisation").style.fontSize = Size);}
  event.preventDefault();
}
