/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  let num = parseInt(time.split(':')[0])
  if (num < 12) {
    return "Good Morning"
  } else if (num < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}