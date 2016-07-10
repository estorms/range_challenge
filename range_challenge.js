function syncNum2Range() {
  document.getElementById("userRange").innerText = "You have input a value of " + document.getElementById("range").value + ".";
  document.getElementById("number").value = document.getElementById("range").value;
  document.getElementById("userNumber").innerText = "That means your number is also " + document.getElementById("range").value + "."; 
}

function syncRange2Num() {
  document.getElementById("userNumber").innerText = "You have input a value of " + document.getElementById("number").value + ".";
  document.getElementById("range").value = document.getElementById("number").value;
  document.getElementById("userRange").innerText = "That means your number is also " + document.getElementById("number").value + "."; 
}

//inelegant overall: could combine functions into one and stick some of the gunk w/ids and values into variables