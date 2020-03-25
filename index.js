
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* Write your implementation of displayMessage() */

function greet(time) {
  // const words = str.split(':');
  const hour = parseInt(time.split(':')[0])
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(str) {
  document.getElementById('greeting').innerText = str
  
}