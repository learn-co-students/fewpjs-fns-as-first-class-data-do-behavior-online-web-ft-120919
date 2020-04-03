/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
// function greet(timeStr) {
//   const hour = parseInt(timeStr, 10);
//   if ( hour < 12) return "Good Morning"
//   if ( hour > 17) return "Good Evening"
//   return "Good Afternoon"
// }
function greet(string) {
  const hour = string.split(":");
  if (hour[0] < 12) return "Good Morning"
  if (hour[0] > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of greet() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
/* Write your implementation of displayMessage() */
