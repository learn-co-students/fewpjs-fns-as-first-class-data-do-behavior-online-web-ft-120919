/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let parsed = parseInt(string, 10);

    if (parsed < 12){
    return "Good Morning";
  } else if (parsed < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

function displayMessage(string){
  let input = document.getElementById("greeting")
  // input.addEventListener('click', function(event){
  //   display = document.createElement('h1')
  //   display.innerText =
    input.innerText = string
}

/* Write your implementation of displayMessage() */
