/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeSplit = time.split(":")
  let hour = parseInt(timeSplit[0])
  let min = parseInt(timeSplit[1])
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon"
  }
  else if (hour > 17) {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector("#greeting").innerText = string
}