/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  console.log(time)
  let k = parseFloat(time)
  if (k <= 12) {
    return 'Good Morning'
  } else if (k > 12 && k <= 17) {
    return 'Good Afternoon'
  } else{
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(time) {
  let content = document.getElementById("greeting")
  content.innerText=time
}
