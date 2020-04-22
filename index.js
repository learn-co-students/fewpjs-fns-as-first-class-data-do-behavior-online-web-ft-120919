/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  const hourString = timeString.split(":")[0];
  const hour = parseInt(hourString);
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour < 24) {
    return "Good Evening";
  } else {
    return "Invalid timestamp";
  }
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message;
}