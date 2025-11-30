// Select the <ul> using querySelector
const list = document.querySelector("#item-list"); // querySelector returns the first element that matches the CSS selector [web:24]
const addButton = document.querySelector("#add-btn");

// Click handler to add new <li>
addButton.addEventListener("click", function () { // addEventListener attaches a click handler to the button [web:26]
  const newLi = document.createElement("li"); // createElement creates a new li element in the DOM [web:28]
  newLi.textContent = "New Item";

  // Find the sequence number after appending
  list.appendChild(newLi); // appendChild adds the new li as the last child of the ul [web:23]
  const position = list.children.length; // children gives the live HTMLCollection of li elements [web:24]

  // Style based on odd/even position
  if (position % 2 === 1) {
    // odd: bold & blue
    newLi.style.fontWeight = "bold"; // fontWeight controls text boldness [web:33]
    newLi.style.color = "blue";
    newLi.style.fontStyle = "normal"; // ensure not italic [web:39]
  } else {
    // even: italic & red
    newLi.style.fontStyle = "italic"; // fontStyle sets normal/italic/oblique [web:39]
    newLi.style.color = "red";
    newLi.style.fontWeight = "normal";
  }
});
