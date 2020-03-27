/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  const hhAndMm = string.split(":");
  const hh = parseInt(hhAndMm[0]);
  if (hh < 12){
    return "Good Morning"
  }
if (hh <= 17){
  return "Good Afternoon"
}
if (hh > 17){
  return "Good Evening"
}
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  
  let content = document.getElementById("greeting");
  content.innerText = string;

}
      

