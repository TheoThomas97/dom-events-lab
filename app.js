// ? Task 1
// When the button with the id of "toggle" is clicked, you should toggle a class of "pulse" on the circle div. 
// * Hint 1: If you have added the class correctly, you should see the circle turn red, and it should pulse.
// * Hint 2: When you click the button again, it should go back to being an outline of a circle.

// Step 1: Select the button and the circle
const toggleButton = document.querySelector("#toggle");
const circle = document.querySelector(".circle")

function handlePulse(){
  console.log("PULSE")
}

// Step 2: Add click event to toggle the class
toggleButton.addEventListener("click", handlePulse)



// ? Task 2
// Add a 'change' event listener to the "cities" select element
// When a city is selected, the value of the selected city option should be inserted into the "city" span element

const citiesSelect = document.getElementById("cities");
const citySpan = document.getElementById("city");

citiesSelect.addEventListener("change", function () {
  citySpan.textContent = citiesSelect.value;
});




//  ? Task 3
// Part One: Add event listeners to each of the divs with the class of "name", so that when you hover over that div, the name inside that div appears inside the span with the id of "current".

// Part Two: Add event listeners to each of the divs with the class of "name", so that when the mouse leaves any of the divs, the span with the id of "current" is empty.

// Select all divs with class "name"
const nameDivs = document.querySelectorAll(".name");

// Select the span with id "current"
const currentSpan = document.getElementById("current");

// Add event listeners to each "name" div
nameDivs.forEach((div) => {
  // Part One: When mouse enters, show name
  div.addEventListener("mouseenter", () => {
    currentSpan.textContent = div.textContent;
  });

  // Part Two: When mouse leaves, clear the span
  div.addEventListener("mouseleave", () => {
    currentSpan.textContent = "";
  });
});



// ? Task 4
// Add a "submit" event listener to the form with the id of "subscribe"
// When the form is submitted, add a class of "submitted" to the button inside the form.
// You should also update the innerHTML of the button to be "Submitted!".
// * Hint 1: If you have added the class correctly, you should see that the button has an opacity of 0.8. 
// * Hint 2: You will need to prevent the default behaviour of the form in order to stop the page from refreshing before the changes are made.

const form = document.getElementById("subscribe");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page from refreshing

  const button = form.querySelector("button");
  button.classList.add("submitted");
  button.innerHTML = "Submitted!";
});



// ? BONUS Task 5
// Add an event listener to the window, so that when the user scrolls, you check whether or not the scrollY property of the window is greater than 40. 
// If it is greater than 40, add the class "fadeOutUp" to the <h1> tag. 
// If it is less than 40, remove the class "fadeOutUp" from the <h1> tag. 
// * Hint: As you scroll, you should see the <h1> tag fade out. If you scroll back down, it will reappear.

const heading = document.querySelector("h1");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    heading.classList.add("fadeOutUp");
  } else {
    heading.classList.remove("fadeOutUp");
  }
});
