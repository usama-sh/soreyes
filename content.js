document.addEventListener("mouseover", function (event) {
  // Check if the hovered element is a paragraph (or a child of a paragraph)
  var paragraphElement = findParentParagraph(event.target);
  
  if (paragraphElement) {
    // Apply a smooth transition to the background color on mouseover
    paragraphElement.style.transition = "background-color 0.5s ease";
    paragraphElement.style.backgroundColor = "dullblue";
  }
});

document.addEventListener("mouseout", function (event) {
  // Reset the background color with a smooth transition on mouseout
  var paragraphElement = findParentParagraph(event.target);
  
  if (paragraphElement) {
    paragraphElement.style.backgroundColor = "";
  }
});

// Helper function to find the closest parent paragraph
function findParentParagraph(element) {
  while (element && element.tagName !== "P") {
    element = element.parentNode;
  }
  return element;
}