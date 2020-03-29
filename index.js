/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(ts){
  if ((ts>"12:00") && (ts <"17:00"))
     return "Good Afternoon";
  else if ((ts >"17:00") && (ts<"24:00") )
    return "Good Evening";
  else
    return "Good Morning";
}
/* Write your implementation of displayMessage() */
function displayMessage(g){
  let h1 = document.getElementById("greeting");
  h1.innerText=g;
}
