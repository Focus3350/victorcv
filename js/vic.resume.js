// print.js
document.addEventListener("DOMContentLoaded", function () {
  const printButton = document.getElementById("print-btn");
  printButton.addEventListener("click", function () {
    window.print();
  });
});

const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
  // Regex matches any digit from 0 to 9
  if (/\d/.test(nameInput.value)) {
    nameInput.setCustomValidity('Numbers are not allowed in the name field⚠️.');
  } else {
    nameInput.setCustomValidity(''); // Resets the error if the input is valid
  }
});

const textarea = document.getElementById('message');

textarea.addEventListener('input', function () {
  const words = this.value.trim().split(/\s+/);
  const wordCount = words[0] === '' ? 0 : words.length;

  if (wordCount > 150) {
    // Trim the text to exactly 150 words
    const trimmedText = words.slice(0, 150).join(' ');
    this.value = trimmedText;

    // Optional: Alert the user or update a counter
    this.setCustomValidity('Maximum limit of 150 words reached.');
    this.reportValidity();
  } else {
    this.setCustomValidity('');
  }
});

document.querySelector("button").addEventListener("click", function () {
  this.style.backgroundColor = "green";
});


// back to the top
var backBtn = document.querySelector(".back-btn");
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 100) {
    backBtn.classList.add("active");
  } else {
    backBtn.classList.remove("active");
  }
});
backBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


// welcome note
const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good morning Welcome!";
} else if (time < 16) {
  greeting = "Good day Welcome!";
} else {
  greeting = "Good evening Welcome!";
}
document.getElementById("demo").innerHTML = greeting;


//Javascript for weekday
let day;
let date = new Date().getDay();
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";}
document.getElementById("day").innerHTML = "Today is " + day;


//Time
setInterval(showTime, 1000);

function showTime() {
  const date = new Date();
  myDisplayer(date.toLocaleTimeString());
}
function myDisplayer(text) {
  let time = document.getElementById("time"); 
  time.innerHTML = text;}

  