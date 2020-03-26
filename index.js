/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let time1 = time.split(":");
  let time2 = time1[0].concat(time1[1])
  let updated_time = parseInt(time2, 10)

  if (updated_time < 1200 ) {
    return "Good Morning"
  }

  else if (updated_time >= 1200 && updated_time <= 1700 ) {
    return "Good Afternoon"
  }

  else if (updated_time > 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
document.querySelector("#greeting").innerText = string 
}
