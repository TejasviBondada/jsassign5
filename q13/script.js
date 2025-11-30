// Select all required elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const bgButton = document.getElementById("bg-btn");
const textButton = document.getElementById("text-btn");
const contentDiv = document.getElementById("content-div");

// Change Background button handler
bgButton.addEventListener("click", function() {
  const colorValue = colorInput.value.trim(); // trim removes whitespace from input [web:24]
  
  if (!colorValue) {
    alert("Please enter a color name!");
    return;
  }
  
  // Test if color is valid by temporarily applying it
  contentDiv.style.backgroundColor = colorValue;
  // Check computed style to verify if color was applied successfully
  const computedStyle = window.getComputedStyle(contentDiv).backgroundColor;
  
  if (computedStyle === "rgba(0, 0, 0, 0)" || computedStyle === "transparent") {
    alert("Invalid color name!"); // Invalid color check [web:19]
    // Reset to previous color if invalid
    contentDiv.style.backgroundColor = "";
  }
});

// Update Text button handler
textButton.addEventListener("click", function() {
  const textValue = textInput.value.trim();
  
  if (!textValue) {
    alert("Please enter some text!"); // Empty input validation
    return;
  }
  
  contentDiv.textContent = textValue; // textContent updates the div's text [web:11]
});
