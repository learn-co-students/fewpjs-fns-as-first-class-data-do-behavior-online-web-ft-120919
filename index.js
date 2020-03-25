/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = parseInt(timeString.split(':')[0])
  //output = []
  //nums.forEach(function(item, index) {
  //  output[index] = parseInt(item)
  //})
  //return output
  if (hour < 12) { return 'Good Morning'}
  if (hour < 17) { return 'Good Afternoon'}
  if (hour >= 17) { return 'Good Evening'}
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector('#greeting').innerText = message
}
