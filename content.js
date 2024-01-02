console.log("Content script is running!");

document.addEventListener("mouseover", function (event) {
  // Check if the hovered element is a paragraph (or a child of a paragraph)
  var paragraphElement = findParentParagraph(event.target);
  
  if (paragraphElement) {
    // Apply highlighting to the paragraph
    paragraphElement.style.backgroundColor = "yellow";
  }
});

document.addEventListener("mouseout", function (event) {
  // Reset the background color on mouseout
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

