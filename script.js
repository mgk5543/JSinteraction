var fortunes = [", you're going to be old one day.", ", you will most likely blink within the next few minutes.", ", you are most likely breathing right now.", ", you are definitely going to move at least once within the next few hours."];
var color = ["#7e98ed", "#02b1cc", "#02ccb8", "#576399", "#8f79b5", "#79697d", "#78ab84"];

window.addEventListener('DOMContentLoaded', function(){
  calculatorButton = document.getElementById("half-button");
  calculatorInput = document.getElementById("half-input");
  calcOutput = document.getElementById("half-output");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");

  fortuneButton.addEventListener("click",fortune);
  calculatorButton.addEventListener("click",halfNumber);
});

function halfNumber() {
  var numInput = calculatorInput.value;
  var numOutput = numInput/2;

  if (numInput) {
    alert("Half of " + numInput + " is " + numOutput + ".");
  } else {
    alert("You did not type a number");
  }
}


function fortune(){
  var name = fortuneInput.value;

  if(fortuneInput.value){
    restyle(name);
  }
  else{
    fortuneOutput.innerHTML = "Please type in your name!";
  }
}

function restyle(name){
  var ranFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneOutput.innerHTML = name + ranFortune;

  fortuneOutput.style.color = color[Math.floor(Math.random() * color.length)];
}
