/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hourString = timeString.split(':')[0];
  let timeNum = parseInt(hourString, 10);

  if (timeNum < 12) {
    return "Good Morning"
  } else if (timeNum < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(displayString) {
  const greetingHeader = document.querySelector('h1#greeting')
  greetingHeader.innerText = displayString
}