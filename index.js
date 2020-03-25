/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hrsAndMin = time.split(':');
  const hrs = parseInt(hrsAndMin[0]);
  if (hrs < 12){
    return "Good Morning"
  }
  else if (hrs <= 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = str;
}
